const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;