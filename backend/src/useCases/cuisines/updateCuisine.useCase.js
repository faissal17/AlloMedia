const { cuisineRepository } = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  //   const { cuisineRepository } = dependencies;
  if (!cuisineRepository) {
    throw new Error("The cuisine repository should be exist in dependancies");
  }
  const execute = ({ cuisine }) => {
    return cuisineRepository.update(cuisine);
  };
  return { execute };
};
