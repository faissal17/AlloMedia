const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;