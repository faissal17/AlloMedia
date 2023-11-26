const express = require("express");
const {} = require("../../../config/dependencies");

const { restaurantController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addRestaurantController,
    deleteRestaurantController,
    updateRestaurantController,
    getRestaurantByIdController,
    getAllRestaurantController,
    filterRestaurantController,
  } = restaurantController(dependencies);

  router
    .route("/")
    .post(auth.isManager, addRestaurantController)
    .delete(auth.isManager, deleteRestaurantController)
    .patch(auth.isManager, updateRestaurantController)
    .get(getAllRestaurantController);

  // router.route("/:id").get(getRestaurantByIdController);
  router.route("/:slug").get(getRestaurantByIdController);
  router.route("/search").post(filterRestaurantController);

  return router;
};
