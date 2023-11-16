const {
  categoriesRepository,
} = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!categoriesRepository) {
    throw new Error("The category repository should be exist in dependancies");
  }
  console.log("before");
  const execute = ({ id }) => {
    return categoriesRepository.getById(id);
  };
  return { execute };
};
