const express = require("express");
const { cityController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addCityController,
    deleteCityController,
    updateCityController,
    getCityByIdController,
    getAllCityController,
  } = cityController(dependencies);

  router
    .route("/")
    .get(getAllCityController)
    .post(auth.isManager, addCityController)
    .delete(auth.isManager, deleteCityController)
    .patch(auth.isManager, updateCityController);

  router.route("/:id").get(getCityByIdController);

  return router;
};
