const mongoose = require("mongoose");

const cuisineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
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
  },
  {
    timestamps: true,
  }
);

const Cuisine = mongoose.model("Cuisine", cuisineSchema);

module.exports = Cuisine;