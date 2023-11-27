const { restaurantRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  console.log('useCase rest')
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }

  const execute = () => {
    return restaurantRepository.getAll();
  };
  return { execute };
};
