const express = require("express");

const { userControllers } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addUserController,
    deleteUserController,
    updateUserController,
    getUserByIdController,
    getUserByEmailController,
  } = userControllers(dependencies);

  router
    .route("/")
    .post(addUserController)
    .delete(deleteUserController)
    .patch(updateUserController);
  router.route("/:id").get(getUserByIdController);
  router.route("/login").post(getUserByEmailController);

  return router;
};
