const express = require("express");
const { tagController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

module.exports = (dependencies) => {
  const router = express.Router();
  const {
    addTagController,
    deleteTagController,
    updateTagController,
    getTagByIdController,
    getAllTagsController,
  } = tagController(dependencies);

  router
    .route("/")
    .get(getAllTagsController)
    .post(auth.isManager, addTagController)
    .delete(auth.isManager, deleteTagController)
    .patch(auth.isManager, updateTagController);

  router.route("/:id").get(getTagByIdController);

  return router;
};
