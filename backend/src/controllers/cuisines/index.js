const addCuisineController = require("./addCuisine.controller");
const deleteCuisineController = require("./deleteCuisine.controller");
const getCuisineController = require("./getCuisine.controller");
const updateCuisineController = require("./updateCuisine.controller");
const getAllCuisineController = require("./getAllCuisine.controller");

module.exports = (dependencies) => {
  return {
    addCuisineController,
    deleteCuisineController,
    getCuisineController,
    updateCuisineController,
    getAllCuisineController,
  };
};
