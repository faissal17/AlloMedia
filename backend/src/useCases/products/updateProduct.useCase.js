const {
  productsRepository,
} = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!productsRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = ({ product }) => {
    console.log("fucking", product);
    return productsRepository.update(product);
  };
  return { execute };
};
