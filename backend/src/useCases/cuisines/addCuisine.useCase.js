const { Cuisine } = require("../../entities");
const { cuisineRepository } = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!cuisineRepository) {
    throw new Error("cuisineRepository should be in dependencies");
  }

  const execute = ({ name }) => {
    const cuisine = new Cuisine({
      name,
    });

    return cuisineRepository.add(cuisine);
  };

  return {
    execute,
  };
};
