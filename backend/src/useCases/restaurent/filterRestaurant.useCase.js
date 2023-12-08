const { restaurantRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (search) => {
    return restaurantRepository.search(search);
  };
  return { execute };
};
