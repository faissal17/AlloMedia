const mongoose = require("mongoose");

const entityName = "OrderDetails";
const {
  schemas: { orderDetails: orderdetailsSchema },
} = require("../../database/mongo");

const OrderDetails = mongoose.model(entityName, orderdetailsSchema);

module.exports = {
  add: async (orderDetails) => {
    const mongoObject = new OrderDetails(orderDetails);
    return mongoObject.save();
  },
  delete: async (orderDetails) => {
    const { id } = orderDetails;
    return OrderDetails.findByIdAndDelete(
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
    const orderdetails = await OrderDetails.findOne({
      _id: id,
    });
    if (!orderdetails) {
      throw new Error(
        `orderdetails with ID ${id} does not exist or has been deleted.`
      );
    }
    return orderdetails;
  },
};
