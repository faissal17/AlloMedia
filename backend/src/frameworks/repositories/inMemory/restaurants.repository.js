const { inMemory: inMemoryDb } = require("../../database");

const { v4: uuidv4 } = require("uuid");

module.exports = {
  add: async (restaurant) => {
    if (!restaurant.id) {
      restaurant.id = uuidv4();
    }
    inMemoryDb.restaurants.push(restaurant);
    return restaurant;
  },
  update: async (restaurant) => {
    const index = inMemoryDb.restaurants.findIndex(
      (index) => index.id === restaurant.id
    );
    if (index >= 0) {
      inMemoryDb.restaurants[index] = restaurant;
      return inMemoryDb.restaurants[index];
    }
    return null;
  },
  delete: async (restaurant) => {
    const index = inMemoryDb.restaurants.findIndex(
      (index) => index.id === restaurant.id
    );
    if (index >= 0) {
      inMemoryDb.restaurants.splice(index, 1);
      return restaurant;
    }
    return null;
  },
  getById: async (id) => {
    return inMemoryDb.restaurants.find((item) => item.id === id);
  },
};
