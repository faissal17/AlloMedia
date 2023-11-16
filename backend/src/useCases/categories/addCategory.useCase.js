const { Category } = require("../../entities");
const {
  categoriesRepository,
} = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!categoriesRepository) {
    throw new Error("categoriesRepository should be in dependencies");
  }

  const execute = ({ name }) => {
    const category = new Category({
      name,
    });

    return categoriesRepository.add(category);
  };

  return {
    execute,
  };
};
