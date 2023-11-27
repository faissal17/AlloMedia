const express = require("express");
const { roleController } = require("../../../controllers");

module.exports = (dependencies) => {
  const router = express.Router();
  const { addRoleController } = roleController(dependencies);

  router.route("/").post(addRoleController);

  return router;
};
