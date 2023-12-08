const express = require("express");
const { categoryController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

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
    .post(auth.isManager, addCategoryController)
    .delete(auth.isManager, deleteCategoryController)
    .patch(auth.isManager, updateCategoryController);

  router.route("/:id").get(getCategoryController);

  return router;
};
