const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;