const addTagController = require("./addTag.controller");
const deleteTagController = require("./deleteTag.controller");
const updateTagController = require("./updateTag.controller");
const getTagByIdController = require("./getTagById.controller");
const getAllTagsController = require("./getAllTag.controller");

module.exports = (dependencies) => {
  return {
    addTagController,
    deleteTagController,
    updateTagController,
    getTagByIdController,
    getAllTagsController,
  };
};
