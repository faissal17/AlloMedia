const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  // Other tag-related fields
  
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
