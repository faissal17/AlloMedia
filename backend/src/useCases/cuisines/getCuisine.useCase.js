const { cuisinesRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!cuisinesRepository) {
    throw new Error("The cuisine repository should be exist in dependancies");
  }
  console.log("before");
  const execute = ({ id }) => {
    return cuisinesRepository.getById(id);
  };
  return { execute };
};
