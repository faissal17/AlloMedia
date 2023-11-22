const { inMemory: inMemoryDb } = require("../../database");
const mongoose = require("mongoose");
const slugify = require("slugify");
const entityName = "Category";
const {
  schemas: { category: categorySchema },
} = require("../../database/mongo");

const Category = mongoose.model(entityName, categorySchema);

module.exports = {
  add: async (category) => {
    const mongoObject = new Category(category);
    return mongoObject.save();
  },
  update: async (category) => {
    const { id, updates } = category;
    return Category.findByIdAndUpdate(
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
  delete: async (category) => {
    const { id } = category;
    return Category.findByIdAndDelete(
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
    const category = await Category.findOne({
      _id: id,
    });
    if (!category) {
      throw new Error(
        `category with ID ${id} does not exist or has been deleted.`
      );
    }
    return category;
  },
  getAll: async () => {
    const categories = await Category.find();
    console.log(categories);
    if (!categories) {
      throw new Error(`categories does not exist or has been deleted.`);
    }
    return categories;
  },
};
