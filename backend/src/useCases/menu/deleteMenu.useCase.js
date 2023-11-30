const { menuRepository } = require("../../frameworks/repositories/mongo");

module.exports = (dependencies) => {
  if (!menuRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = (menu) => {
    console.log("repo", menu);
    return menuRepository.delete(menu);
  };
  return { execute };
};
