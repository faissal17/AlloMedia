const { inMemory: inMemoryDb } = require("../../database");
const mongoose = require("mongoose");
const entityName = "Role";
const {
  schemas: { role: roleSchema },
} = require("../../database/mongo");

const Role = mongoose.model(entityName, roleSchema);

module.exports = {
  add: async (role) => {
    const mongoObject = new Role(role);
    return mongoObject.save();
  },
  update: async (role) => {
    const { id, updates } = role;
    return Role.findByIdAndUpdate(
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
  delete: async (role) => {
    const { id } = role;
    return Role.findByIdAndDelete(
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
    const role = await Role.findOne({
      _id: id,
    });
    if (!role) {
      throw new Error(`role with ID ${id} does not exist or has been deleted.`);
    }
    return role;
  },
  getAll: async () => {
    const role = await Role.find();
    if (!role) {
      throw new Error(`role does not exist or has been deleted.`);
    }
    return role;
  },
};
