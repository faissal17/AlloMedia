const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;