const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema({
  // Other tag-related fields
  order: {
    type: String,
    ref: "Order",
    default: null,
  },
  item: {
    type: String,
    ref: "Item",
    default: null,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = orderDetailsSchema;
