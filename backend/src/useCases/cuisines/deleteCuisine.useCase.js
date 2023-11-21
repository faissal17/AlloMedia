const { cuisinesRepository } = require("../../frameworks/repositories/mongo");

module.exports = (dependencies) => {
  //   const { cuisinesRepository } = dependencies;
  if (!cuisinesRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (cuisine) => {
    return cuisinesRepository.delete(cuisine);
  };
  return { execute };
};
