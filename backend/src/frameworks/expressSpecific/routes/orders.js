const express = require("express");
const {} = require("../../../config/dependencies");

const { orderController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addOrderController,
    deleteOrderController,
    updateOrderController,
    getOrderByIdController,
  } = orderController(dependencies);

  router
    .route("/")
    .post(addOrderController)
    .delete(deleteOrderController)
    .put(updateOrderController);

  router.route("/:id").get(getOrderByIdController);

  return router;
};
