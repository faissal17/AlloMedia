const express = require("express");
const {} = require("../../../config/dependencies");

const { restaurantController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addRestaurentController,
    deletRestaurentController,
    updateRestaurentController,
    getRestaurentController,
  } = restaurantController(dependencies);

  router
    .route("/")
    .post(addRestaurentController)
    .delete(deletRestaurentController)
    .put(updateRestaurentController);

  router.route("/:id").get(getRestaurentController);

  return router;
};
