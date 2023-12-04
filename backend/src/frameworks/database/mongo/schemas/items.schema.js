const mongoose = require("mongoose");
const validator = require("validator");

const itemSchema = new mongoose.Schema(
  {
    // Other tag-related fields
    title: {
      type: String,
      required: [true, "product name is required"],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, "product slug is required"],
      trim: true,
      lowercase: true,
      unique: true,
      validator: (value) => {
        return validator.isAlphanumeric(value.replace(/\s/g, ""));
      },
    },
    short_description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 100,
      minlength: 1,
      validator: (value) => {
        return validator.isAlphanumeric(value.replace(/\s/g, ""));
      },
    },
    description: {
      type: String,
      trim: true,
      lowercase: true,
    },
    r_price: {
      type: Number,
      required: false,
      trim: true,
      default: 0,
      validator: (value) => {
        // remove all spaces from string value
        return validator.isNumeric(value.replace(/\s/g, ""));
      },
    },
    s_price: {
      type: Number,
      required: [true, "product sale price is required"],
      trim: true,
      validator: (value) => {
        return validator.isNumeric(value.replace(/\s/g, ""));
      },
    },
    status: {
      type: Number,
      required: [true, "product status is required"],
      enum: [0, 1],
      default: 1,
      comment: "0=inactive,1=active",
      validator: function (value) {
        // Require at least one uppercase le tter, one lowercase letter, one special character and one number
        return validator.isIn(value, [0, 1]);
      },
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
      //required:[true,'product brand is required'],
      default: null,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      //required:[true,'product brand is required'],
      default: null,
    },
    tags: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Tag",
        required: false,
        default: null,
        validator: function (value) {
          //must be character and number
          return validator.isAlphanumeric(value.replace(/\s/g, ""));
        },
      },
    ],
    picture: {
      type: String,
      required: [true, "brand  of product picture is required"],
      trim: true,
      validator: (value) => {
        return validator.isURL(value.replace(/\s/g, ""));
      },
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      default: null,
      //required:true,
    },
    menu: {
      type: mongoose.Schema.ObjectId,
      ref: "Menu",
      default: null,
    },

    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          default: null,
          required: false,
        },
        created_at: {
          type: Date,
          required: false,
          default: null,
          validator: function (value) {
            return validator.isDate(value);
          },
        },
        updated_at: {
          type: Date,
          required: false,
          default: null,
          validator: function (value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isDate(value);
          },
        },
        deleted_at: {
          type: Date,
          required: false,
          default: null,
          validator: function (value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isDate(value);
          },
        },
        deleted: {
          type: Date,
          required: false,
          default: null,
          validator: function (value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isDate(value);
          },
        },
        user_update: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          default: null,
          required: false,
          validator: function (value) {
            //must be character and number
            return validator.isAlphanumeric(value.replace(/\s/g, ""));
          },
        },
        user_delete: {
          //relation with user table
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: false,
          default: null,
          validator: function (value) {
            //must be character and number
            return validator.isAlphanumeric(value.replace(/\s/g, ""));
          },
        },
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = itemSchema;
