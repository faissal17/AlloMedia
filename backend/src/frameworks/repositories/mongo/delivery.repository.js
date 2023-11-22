const mongoose = require("mongoose");
const entityName = "UserDeliveryPersone";

const {
  schemas: { deliveryPerson: deliveryPersonSchema },
} = require("../../database/mongo");

const repository = () => {
  //schema
  const DeliveryPerson = mongoose.model(entityName, deliveryPersonSchema );
  return {
    add: async (dp) => {
        console.log('repository,',dp)
      const mongoObject = new DeliveryPerson(dp);
      return mongoObject.save();
    },
    update: async (dp) => {
      const { id, updates } = dp;
      delete dp.id;
      return DeliveryPerson.findByIdAndUpdate(
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
    delete: async (id) => {
      const { id } = id;
      console.log("repository :", id);
      delete id.id;
      return DeliveryPerson.findByIdAndUpdate(
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
      const user = await DeliveryPerson.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      if (!user) {
        throw new Error(
          `User with ID ${id} does not exist or has been deleted.`
        );
      }
      return user;
    },
  };
};

module.exports = repository();
