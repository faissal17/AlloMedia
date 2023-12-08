const {
  restaurantRepository,
} = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (id) => {
    return restaurantRepository.delete(id);
  };
  return { execute };
};
