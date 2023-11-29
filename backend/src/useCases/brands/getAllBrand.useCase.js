const { brandsRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
    if (!brandsRepository) {
      throw new Error("The brands repository should be exist in dependancies");
    }
    const execute = () => {
      return brandsRepository.getAll();
    };
    return { execute };
  };