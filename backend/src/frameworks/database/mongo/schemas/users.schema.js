const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Other tag-related fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;