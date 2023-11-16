const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  // Other tag-related fields
});

const City = mongoose.model('City', citySchema);

module.exports = City;