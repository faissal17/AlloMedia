const {
  productsRepository,
} = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!productsRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = ({ id }) => {
    return productsRepository.getById(id);
  };
  return { execute };
};
