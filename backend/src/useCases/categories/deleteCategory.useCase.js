const { categoriesRepository } = require("../../frameworks/repositories/mongo");

module.exports = (dependencies) => {
  //   const { cuisineRepository } = dependencies;
  if (!categoriesRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (category) => {

    return categoriesRepository.delete(category);
  };
  return { execute };
};
