const addRestaurantUseCases = require("./addRestaurant.useCases");
const getRestaurantByIdUseCases = require("./getRestaurantById.useCases");
const updateRestaurantUseCases = require("./updateRestaurant.useCases");
const deleteRestaurantUseCases = require("./deleteRestaurant.useCases");
module.exports = {
  addRestaurantUseCases,
  deleteRestaurantUseCases,
  getRestaurantByIdUseCases,
};
