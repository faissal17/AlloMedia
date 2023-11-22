const {
  restaurantRepository,
} = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  console.log("before");
  const execute = (id) => {
    console.log('id',id)
    return restaurantRepository.getById(id);
  };
  return { execute };
};
