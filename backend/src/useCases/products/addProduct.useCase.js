const { Product } = require("../../entities");
const {
  productsRepository,
} = require("../../frameworks/repositories/inMemory");
module.exports = () => {
  if (!productsRepository) {
    throw new Error("productsRepository should be in dependencies");
  }

  const execute = ({ name, description, images, price, color, meta }) => {
    const product = new Product({
      name,
      description,
      images,
      price,
      color,
      meta,
    });

    return productsRepository.add(product);
  };

  return {
    execute,
  };
};
