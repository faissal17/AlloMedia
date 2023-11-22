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

  router.route("/")
    .post(addRestaurantController)
    .delete(deleteRestaurantController)
    .patch(updateRestaurantController);

  router
    .route("/:id")
    .get(getRestaurantByIdController)
    

  return router;
};
