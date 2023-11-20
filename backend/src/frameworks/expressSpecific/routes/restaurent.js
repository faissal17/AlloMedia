const express = require("express");
const {} = require("../../../config/dependencies");

const { restaurantController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addRestaurantController,
    deleteRestaurantController,
    updateRestaurantController,
    getRestaurantByIdController,
  } = restaurantController(dependencies);

  router.route("/").post(addRestaurantController);

  router
    .route("/:id")
    .get(getRestaurantByIdController)
    .delete(deleteRestaurantController)
    .put(updateRestaurantController);

  return router;
};
