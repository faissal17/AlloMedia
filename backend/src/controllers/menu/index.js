const addMenuController = require("./addMenu.controller");
const getAllMenuController = require("./getAllMenu.controller");
const getMenuByIdController = require("./getMenu.controller");
const deleteMenuController = require("./deleteMenu.controller");
const updateMenuController = require("./updateMenu.controller");

module.exports = () => {
  return {
    addMenuController,
    getAllMenuController,
    getMenuByIdController,
    deleteMenuController,
    updateMenuController,
  };
};
