const mongoose = require("mongoose");

const entityName = "Items";

const {
  schemas: { item: itemSchema },
} = require("../../database/mongo");
let globalItems = [];
const repository = () => {
  //schema
  const Item = mongoose.model(entityName, itemSchema);

  return {
    add: async (item) => {
      console.log("I am here");
      const mongoObject = new Item(item);
      let itemss = await mongoObject.save();
      const itemAll = await Item.find()
        .populate(
          "user",
          "first_name last_name username email mobile picture role"
        )
        .populate("brand", "name picture")
        .populate("category", "name picture")
        .populate("menu", "name")
        .populate("tags", "name");
      globalItems = itemAll;
      // Save to Redis

      return itemss;
    },
    update: async (item) => {
      const { id, updates } = item;
      delete item.id;
      const updatedItem = await Item.findByIdAndUpdate(
        id,
        {
          ...updates,
          updatedAt: new Date(),
        },
        {
          new: true,
        }
      );
      // Update Redis cache
      const itemAll = await Item.find()
        .populate(
          "user",
          "first_name last_name username email mobile picture role"
        )
        .populate("brand", "name picture")
        .populate("category", "name picture")
        .populate("menu", "name")
        .populate("tags", "name");

      return updatedItem;
    },
    delete: async (item) => {
      const { id } = item;
      delete item.id;
      const deletedItem = await Item.findByIdAndDelete(id);
      // Update Redis cache

      return deletedItem;
    },
    getById: async (id) => {
      const item = await Item.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      if (!item) {
        throw new Error(
          `Brand with ID ${id} does not exist or has been deleted.`
        );
      }
      return item;
    },
    getAll: async () => {
      const items = await Item.find()
        .populate(
          "user",
          "first_name last_name username email mobile picture role"
        )
        .populate("brand", "name picture")
        .populate("category", "name picture")
        .populate("menu", "name")
        .populate("tags", "name");
      //console.log(items)
      globalItems = items;
      //console.log(globalItems)
      if (!items) {
        throw new Error(`categories does not exist or has been deleted.`);
      }
      return items;
    },
  };
};

module.exports = repository();
