const {
  orderDetailsRepository,
} = require("../../frameworks/repositories/mongo");

module.exports = (dependencies) => {
  if (!orderDetailsRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (orderDetails) => {
    return orderDetailsRepository.delete(orderDetails);
  };
  return { execute };
};
