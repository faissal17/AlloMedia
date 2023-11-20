const { cuisinesRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!cuisinesRepository) {
    throw new Error("The cuisine repository should be exist in dependancies");
  }
  const execute = () => {
    return cuisinesRepository.getAll();
  };
  return { execute };
};
