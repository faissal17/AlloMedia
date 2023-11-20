const {
  restaurantRepository,
} = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = ({ restaurant, id }) => {
    return restaurantRepository.update(restaurant, id);
  };
  return { execute };
};
