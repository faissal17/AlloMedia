const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Other tag-related fields
});

const OrderSchema = mongoose.model('OrderSchema', orderSchema);

module.exports = OrderSchema;