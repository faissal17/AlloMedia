const { OrderDetails } = require("../../entities");
const {
  orderDetailsRepository,
} = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!orderDetailsRepository) {
    throw new Error("orderDetailsRepository should be in dependencies");
  }
  const execute = ({ order, item, quantity }) => {
    const orderDetails = new OrderDetails({
      order,
      item,
      quantity,
    });
    return orderDetailsRepository.add(orderDetails);
  };

  return {
    execute,
  };
};
