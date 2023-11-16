const {
  categoriesRepository,
} = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  //   const { cuisineRepository } = dependencies;
  if (!categoriesRepository) {
    throw new Error("The category repository should be exist in dependancies");
  }
  const execute = ({ category }) => {
    return categoriesRepository.update(category);
  };
  return { execute };
};
