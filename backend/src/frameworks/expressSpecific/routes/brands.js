const express = require("express");
const { brandController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addBrandController,
    deleteBrandController,
    updateBrandController,
    getBrandByIdController,
  } = brandController(dependencies);

  router
    .route("/")
    .post(addBrandController)
    .delete(deleteBrandController)
    .patch(updateBrandController);

  router.route("/:id").get(getBrandByIdController);

  return router;
};
