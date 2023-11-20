const { categoriesRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!categoriesRepository) {
    throw new Error("The category repository should be exist in dependancies");
  }
  const execute = () => {
    return categoriesRepository.getAll();
  };
  return { execute };
};
