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
    getAllOrderController,
    getAllOrderConfirmController,
    updateOrderDeliveryController,
    getAllOrderTakeController,
  } = orderController(dependencies);

  router
    
    .route("/")
    .get(getAllOrderController)
    .post(addOrderController)
    .delete(deleteOrderController)
    .patch(updateOrderController);
  router.route("/confirm")
    .get(getAllOrderConfirmController)
    .patch(updateOrderDeliveryController)
  router.route("/delivery")
    .get(getAllOrderTakeController)
  router.route("/:id").get(getOrderByIdController);
  

  return router;
};
