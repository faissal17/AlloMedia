const { inMemory: inMemoryDb } = require("../../database");
const mongoose = require("mongoose");

const entityName = "Cuisine";
const {
  schemas: { cuisine: cuisineSchema },
} = require("../../database/mongo");

const Cuisine = mongoose.model(entityName, cuisineSchema);
module.exports = {
  add: async (cuisine) => {
    const mongoObject = new Cuisine(cuisine);
    return mongoObject.save();
  },
  update: async (cuisine) => {
    const { id, updates } = cuisine;
    return Cuisine.findByIdAndUpdate(
      id,
      {
        ...updates,
        updatedAt: new Date(),
      },
      {
        new: true,
      }
    );
  },
  delete: async (cuisine) => {
    const { id } = cuisine;
    return Cuisine.findByIdAndDelete(
      id,
      {
        deletedAt: new Date(),
      },
      {
        new: true,
      }
    );
  },
  getById: async (id) => {
    const cuisine = await Cuisine.findOne({
      _id: id,
    });
    if (!cuisine) {
      throw new Error(
        `cuisine with ID ${id} does not exist or has been deleted.`
      );
    }
    return cuisine;
  },
  getAll: async () => {
    const cuisines = await Cuisine.find();
    if (!cuisines) {
      throw new Error(`cuisines does not exist or has been deleted.`);
    }
    return cuisines;
  },
};
