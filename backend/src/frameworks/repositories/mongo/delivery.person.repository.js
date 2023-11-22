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
      console.log('repository ',dp)
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
      
      console.log("repository :", id);
      
      return DeliveryPerson.findByIdAndUpdate(
        id,
        {
          deleteAt: new Date(),
        },
        {
          new: true,
        }
      );
    },
    getById: async (id) => {
        console.log('fucking id ',id)
      const user = await DeliveryPerson.findOne({
        _id: id,
        // deletedAt: {
        //   $exists: false,
        // },
      });
      if (!user) {
        throw new Error(
          `User with ID ${id} does not exist or has been deleted.sss`
        );
      }
      return user;
    },
  };
};

module.exports = repository();
