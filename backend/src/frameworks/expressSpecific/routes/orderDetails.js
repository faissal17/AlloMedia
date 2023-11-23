const express = require("express");
const { orderDetailsController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addOrderDetailsController,
    deleteOrderDetailsController,
    getOneOrderDetailsController,
  } = orderDetailsController(dependencies);

  router
    .route("/")
    .post(addOrderDetailsController)
    .delete(deleteOrderDetailsController);

  router.route("/:id").get(getOneOrderDetailsController);

  return router;
};
