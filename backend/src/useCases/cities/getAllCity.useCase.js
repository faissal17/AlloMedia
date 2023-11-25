const { citiesRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!citiesRepository) {
    throw new Error("The city repository should be exist in dependancies");
  }
  const execute = () => {
    return citiesRepository.getAll();
  };
  return { execute };
};
