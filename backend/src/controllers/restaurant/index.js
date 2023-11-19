const addRestaurentController = require("./addRestaurant");
const deletRestaurentController = require("./deleteRestaurant");
const getRestaurentController = require("./getRestaurant");
const updateRestaurentController = require("./updateRestaurant");

module.exports = (dependencies) => {
  return {
    addRestaurentController,
    deletRestaurentController,
    getRestaurentController,
    updateRestaurentController,
  };
};
