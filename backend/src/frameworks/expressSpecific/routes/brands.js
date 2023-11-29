const express = require("express");
const { brandController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addBrandController,
    deleteBrandController,
    updateBrandController,
    getBrandByIdController,
    getAllBrandsController,
  } = brandController(dependencies);

  router
    .route("/")
    .get(getAllBrandsController)
    .post(auth.isManager, addBrandController)
    .delete(auth.isManager, deleteBrandController)
    .patch(auth.isManager, updateBrandController);

  router.route("/:id").get(getBrandByIdController);

  return router;
};
