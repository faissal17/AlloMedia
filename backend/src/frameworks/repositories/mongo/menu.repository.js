const mongoose = require("mongoose");

const entityName = "Menu";
const {
  schemas: { menu: menuSchema },
} = require("../../database/mongo");

const Menu = mongoose.model(entityName, menuSchema);
module.exports = {
  add: async (menu) => {
    const mongoObject = new Menu(menu);
    return mongoObject.save();
  },
  update: async (menu) => {
    const { id, updates } = menu;
    return Menu.findByIdAndUpdate(
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
  delete: async (menu) => {
    const { id } = menu;
    return Menu.findByIdAndDelete(
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
    const menu = await Menu.findOne({
      _id: id,
    });
    if (!menu) {
      throw new Error(`menu with ID ${id} does not exist or has been deleted.`);
    }
    return menu;
  },
  getAll: async () => {
    const menus = await Menu.find().populate("restaurant");
    if (!menus) {
      throw new Error(`menus does not exist or has been deleted.`);
    }
    return menus;
  },
};
