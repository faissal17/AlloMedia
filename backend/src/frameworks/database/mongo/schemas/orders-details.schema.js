const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
  // Other tag-related fields
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = OrderDetails;