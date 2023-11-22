const { menuRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!menuRepository) {
    throw new Error("The nemu repository should be exist in dependancies");
  }
  const execute = () => {
    return menuRepository.getAll();
  };
  return { execute };
};
