const addRestaurantController = require("./addRestaurant.controller");
const deleteRestaurantController = require("./deleteRestaurant.controller");
const updateRestaurantController = require("./updateRestaurant.controller");
const getRestaurantByIdController = require("./getRestaurant.controller");

module.exports = (dependencies) => {
  return {
    addRestaurantController,
    deleteRestaurantController,
    updateRestaurantController,
    getRestaurantByIdController,
  };
};
