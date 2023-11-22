const express = require("express");
const { cuisineControllers } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addCuisineController,
    deleteCuisineController,
    getCuisineController,
    updateCuisineController,
    getAllCuisineController,
  } = cuisineControllers(dependencies);

  router
    .route("/")
    .post(addCuisineController)
    .delete(deleteCuisineController)
    .patch(updateCuisineController)
    .get(getAllCuisineController);

  router.route("/:id").get(getCuisineController);

  return router;
};
