const express = require("express");
const { categoryController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addCategoryController,
    deleteCategoryController,
    getCategoryController,
    updateCategoryController,
    getAllCategoryController,
  } = categoryController(dependencies);

  router
    .route("/")
    .get(getAllCategoryController)
    .post(addCategoryController)
    .delete(deleteCategoryController)
    .patch(updateCategoryController);

  router.route("/:id").get(getCategoryController);

  return router;
};
