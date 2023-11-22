const mongoose = require("mongoose");
const validator = require("validator");

const cuisineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "cuisine  of product name is required"],
      unique: [true, "cuisine  of product name must be unique"],
      index: true,
      lowercase: true,
      trim: true,
      validator: (value) => {
        return validator.isAlpha(value.replace(/\s/g, ""));
      },
    },
    slug: {
      type: String,
      required: [true, "cuisine  of product slug is required"],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
      validator: (value) => {
        return validator.isAlpha(value.replace(/\s/g, ""));
      },
    },
    status: {
      type: Number,
      required: [true, "cuisine  of product status is required"],
      default: 1,
      Comment: "1 for active and 0 for inactive",
      enum: [0, 1],
      validator: function (value) {
        return validator.isIn(value, [0, 1]);
      },
    },
    status_deleted: {
      type: Number,
      required: [true, "cuisine  of product status is required"],
      default: 0,
      Comment: "1 for activen deleted and 0 for inactive",
      enum: [0, 1],
      validator: function (value) {
        return validator.isIn(value, [0, 1]);
      },
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
    updatedAt: {
      type: Date,
      default: null,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = cuisineSchema;
