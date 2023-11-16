const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
  // Other tag-related fields
});

const DeliveryPersone = mongoose.model('DeliveryPersone', deliveryPersonSchema);

module.exports = DeliveryPersone;