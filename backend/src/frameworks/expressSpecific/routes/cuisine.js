const express = require("express");
const { cuisineControllers } = require("../../../controllers");
const auth = require("../middlewares/Auth");

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
    .post(auth.isManager, addCuisineController)
    .delete(auth.isManager, deleteCuisineController)
    .patch(auth.isManager, updateCuisineController)
    .get(getAllCuisineController);

  router.route("/:id").get(getCuisineController);

  return router;
};
