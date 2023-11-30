const mongoose = require("mongoose");
const validator = require("validator");
const entityNameTags = "Tag";
const entityNameCategories = "Category";
const entityNameBrands = "Brand";
const entityNameMenu = "menu";
const tagSchema = require("../schemas/tags.schema");
const categorySchema = require("../schemas/categories.schema");
const brandSchema = require("../schemas/brands.schema");
const menuSchema = require("../schemas/menu.shema");
const Tag = mongoose.model(entityNameTags, tagSchema);
const Category = mongoose.model(entityNameCategories, categorySchema);
const Brand = mongoose.model(entityNameBrands, brandSchema);
const Menu = mongoose.model(entityNameMenu, menuSchema);

const restaurantSchema = new mongoose.Schema({
  // Other tag-related fields
  name: {
    type: String,
    required: [true, "name  of product name is required"],
    unique: [true, "name  of product name must be unique"],
    index: true,
    lowercase: true,
    trim: true,
    validator: (value) => {
      return validator.isAlpha(value.replace(/\s/g, ""));
    },
  },
  description: {
    type: String,
    required: [true, "description  of product name is required"],
    lowercase: true,
    validator: (value) => {
      return validator.isAlpha(value.replace(/\s/g, ""));
    },
  },
  slug: {
    type: String,
    required: [true, "slug  of product slug is required"],
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
    validator: (value) => {
      return validator.isAlpha(value.replace(/\s/g, ""));
    },
  },
  picture: {
    type: String,
    required: [true, "picture  of product picture is required"],
    trim: true,
    validator: (value) => {
      return validator.isURL(value.replace(/\s/g, ""));
    },
    default:
      "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  },
  status: {
    type: Number,
    required: [true, "brand  of product status is required"],
    default: 1,
    Comment: "1 for active and 0 for inactive",
    enum: [0, 1],
    validator: function (value) {
      // Require at least one uppercase le tter, one lowercase letter, one special character and one number
      return validator.isIn(value, [0, 1]);
    },
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: entityNameTags,
      default: null,
    },
  ],
  brands: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: entityNameBrands,
      default: null,
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: entityNameCategories,
      default: null,
    },
  ],
  cuisines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cuisine",
      default: null,
    },
  ],
  localisation: {
    type: Object,
    default: null,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: entityNameMenu,
    default: null,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: null,
  },
  user_updated: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: null,
  },
  user_deleted: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: null,
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

module.exports = restaurantSchema;
