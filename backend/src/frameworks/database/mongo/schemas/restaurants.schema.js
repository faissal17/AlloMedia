const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;