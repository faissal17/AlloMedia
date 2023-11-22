const { inMemory: inMemoryDb } = require("../../database");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  add: async (cuisine) => {
    if (!cuisine.id) {
      cuisine.id = uuidv4();
    }
    inMemoryDb.cuisines.push(cuisine);
    return cuisine;
  },
  update: async (cuisine) => {
    const index = inMemoryDb.cuisines.findIndex(
      (index) => index.id === cuisine.id
    );
    if (index >= 0) {
      inMemoryDb.cuisines[index] = cuisine;
      return inMemoryDb.cuisines[index];
    }
    return null;
  },
  delete: async (cuisine) => {
    const index = inMemoryDb.cuisines.findIndex(
      (index) => index.id === cuisine.id
    );
    if (index >= 0) {
      inMemoryDb.cuisines.splice(index, 1);
      return cuisine;
    }
    return null;
  },
  getById: async (id) => {
    return inMemoryDb.cuisines.find((item) => item.id === id);
  },
};
