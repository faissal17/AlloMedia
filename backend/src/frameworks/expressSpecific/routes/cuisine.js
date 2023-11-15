const express = require("express");
const { cuisineControllers } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addCuisineController,
    deleteCuisineController,
    getCuisineController,
    updateCuisineController,
  } = cuisineControllers(dependencies);

  router
    .route("/")
    .post(addCuisineController)
    .delete(deleteCuisineController)
    .put(updateCuisineController);

  router.route("/:id").get(getCuisineController);

  return router;
};
