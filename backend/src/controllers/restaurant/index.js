const addRestaurantController = require("./addRestaurant.controller");
const deleteRestaurantController = require("./deleteRestaurant.controller");
const updateRestaurantController = require("./updateRestaurant.controller");
const getRestaurantByIdController = require("./getRestaurant.controller");
const getAllRestaurantController = require("./gatAllRestaurant.controller");
const filterRestaurantController = require("./filterRestaurant.controller");

module.exports = (dependencies) => {
  return {
    addRestaurantController,
    deleteRestaurantController,
    updateRestaurantController,
    getRestaurantByIdController,
    getAllRestaurantController,
    filterRestaurantController,
  };
};
