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
  delete: async (restaurant, id) => {
    try {
      const deleteResturant = await Restaurant.findByIdAndDelete(
        id,
        restaurant
      );
      return deleteResturant;
    } catch (error) {
      console.log(error.message);
    }
    return null;
  },
  getById: async (id) => {
    try {
      const getRestaurantById = await Restaurant.findById(id);
    } catch (error) {
      console.log(error.message);
    }
  },
};
