const {
  restaurantRepository,
} = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  console.log("before");
  const execute = ({ id }) => {
    return restaurantRepository.getById(id);
  };
  return { execute };
};
