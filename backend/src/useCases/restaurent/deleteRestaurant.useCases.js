const {
  restaurantRepository,
} = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = ({ product }) => {
    return restaurantRepository.delete(product);
  };
  return { execute };
};
