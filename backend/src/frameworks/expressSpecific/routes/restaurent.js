const express = require("express");
const { restaurantController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const { addRestaurent, deletRestaurent, getRestaurent, updateRestaurent } =
    restaurantController(dependencies);

  router
    .route("/")
    .post(addRestaurent)
    .delete(deletRestaurent)
    .put(updateRestaurent);

  router.route("/:id").get(getRestaurent);

  return router;
};
