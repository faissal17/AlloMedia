const { cuisineRepository } = require("../../frameworks/repositories/inMemory");

module.exports = (dependencies) => {
//   const { cuisineRepository } = dependencies;
  if (!cuisineRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = ({ cuisine }) => {
    return cuisineRepository.delete(cuisine);
  };
  return { execute };
};
