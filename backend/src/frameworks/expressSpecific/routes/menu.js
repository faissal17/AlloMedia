const express = require("express");
const { menuController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addMenuController,
    getAllMenuController,
    getMenuByIdController,
    deleteMenuController,
    updateMenuController,
  } = menuController(dependencies);

  router
    .route("/")
    .post(addMenuController)
    .get(getAllMenuController)
    .delete(deleteMenuController)
    .patch(updateMenuController);

  router.route("/:id").get(getMenuByIdController);

  return router;
};
