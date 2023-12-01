const mongoose = require("mongoose");
const validator = require("validator");

const entityNameRantaurant = "Restaurant";
const restaurantSchema = require("../schemas/restaurants.schema");
const Restaurant = mongoose.model(entityNameRantaurant, restaurantSchema);

const menuSchema = new mongoose.Schema({
  // Other tag-related fields
  name: {
    type: String,
    required: [true, "name is required"],
    min: 6,
    max: 255,
    lowercase: true,
    validator: (value) => {
      // remove all spaces from string value
      return validator.isAlpha(value.replace(/\s/g, ""));
    },
    trim: true,
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
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: entityNameRantaurant,
    default: null,
  },
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cuisine",
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = menuSchema;
