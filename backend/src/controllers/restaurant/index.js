const addRestaurent = require("./addRestaurant");
const deletRestaurent = require("./deleteRestaurant");
const getRestaurent = require("./getRestaurant");
const updateRestaurent = require("./updateRestaurant");

module.exports = (dependencies) => {
  return {
    addRestaurent,
    deletRestaurent,
    getRestaurent,
    updateRestaurent,
  };
};
