const addRestaurantUseCases = require("./addRestaurant.useCases");
const getRestaurantByIdUseCases = require("./getRestaurantById.useCases");
const updateRestaurantUseCases = require("./updateRestaurant.useCases");
const deleteRestaurantUseCases = require("./deleteRestaurant.useCases");
const getAllRestaurantUseCase = require("./getAllRestaurant.useCase");
const filterRestaurantUseCase = require("./filterRestaurant.useCase");
module.exports = {
  addRestaurantUseCases,
  deleteRestaurantUseCases,
  getRestaurantByIdUseCases,
  updateRestaurantUseCases,
  getAllRestaurantUseCase,
  filterRestaurantUseCase,
};
