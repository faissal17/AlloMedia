const { inMemory: inMemoryDb } = require("../../database");
const Restaurant = require("../../database/mongo/schemas/restaurants.schema");

const { v4: uuidv4 } = require("uuid");

module.exports = {
  add: async (restaurant) => {
    if (!restaurant.id) {
      restaurant.id = uuidv4();
    }
    inMemoryDb.restaurants.push(restaurant);
    try {
      await Restaurant.create(restaurant);
    } catch (error) {
      console.log(error.message);
    }
    return restaurant;
  },
  update: async (restaurant, id) => {
    try {
      const newResturant = await Restaurant.findByIdAndUpdate(id, restaurant);
      return newResturant;
    } catch (error) {
      console.log(error.message);
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
