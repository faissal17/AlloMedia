const {
  orderDetailsRepository,
} = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!orderDetailsRepository) {
    throw new Error("The nemu repository should be exist in dependancies");
  }
  const execute = ({ id }) => {
    return orderDetailsRepository.getById(id);
  };
  return { execute };
};
