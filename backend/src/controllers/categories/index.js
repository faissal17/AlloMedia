const addCategoryController = require("./addCategory.controller");
const deleteCategoryController = require("./deleteCategory.controller");
const getCategoryController = require("./getCategory.controller");
const updateCategoryController = require("./updateCategory.controller");

module.exports = (dependencies) => {
  return {
    addCategoryController,
    deleteCategoryController,
    getCategoryController,
    updateCategoryController,
  };
};
