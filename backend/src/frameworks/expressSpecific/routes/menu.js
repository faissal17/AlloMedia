const express = require("express");
const { menuController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

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
    .post(auth.isManager, addMenuController)
    .get(getAllMenuController)
    .delete(auth.isManager, deleteMenuController)
    .patch(auth.isManager, updateMenuController);

  router.route("/:id").get(getMenuByIdController);

  return router;
};
