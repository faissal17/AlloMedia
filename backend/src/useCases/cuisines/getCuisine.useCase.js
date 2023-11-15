const { cuisineRepository } = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!cuisineRepository) {
    throw new Error("The cuisine repository should be exist in dependancies");
  }
  console.log("before");
  const execute = ({ id }) => {
    return cuisineRepository.getById(id);
  };
  return { execute };
};
