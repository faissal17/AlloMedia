const { inMemory: inMemoryDb } = require("../../database");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  add: async (category) => {
    if (!category.id) {
      category.id = uuidv4();
    }
    inMemoryDb.categories.push(category);
    return category;
  },
  update: async (category) => {
    const index = inMemoryDb.categories.findIndex(
      (index) => index.id === category.id
    );
    if (index >= 0) {
      inMemoryDb.categories[index] = category;
      return inMemoryDb.categories[index];
    }
    return null;
  },
  delete: async (category) => {
    const index = inMemoryDb.categories.findIndex(
      (index) => index.id === category.id
    );
    if (index >= 0) {
      inMemoryDb.categories.splice(index, 1);
      return category;
    }
    return null;
  },
  getById: async (id) => {
    return inMemoryDb.categories.find((item) => item.id === id);
  },
};
