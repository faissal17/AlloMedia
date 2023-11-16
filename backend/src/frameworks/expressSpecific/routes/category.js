const express = require("express");
const { categoryController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addCategoryController,
    deleteCategoryController,
    getCategoryController,
    updateCategoryController,
  } = categoryController(dependencies);

  router
    .route("/")
    .post(addCategoryController)
    .delete(deleteCategoryController)
    .put(updateCategoryController);

  router.route("/:id").get(getCategoryController);

  return router;
};
