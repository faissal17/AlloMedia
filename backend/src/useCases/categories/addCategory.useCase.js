const { Category } = require("../../entities");
const { categoriesRepository } = require("../../frameworks/repositories/mongo");
const slugify = require("slugify");

module.exports = () => {
  if (!categoriesRepository) {
    throw new Error("categoriesRepository should be in dependencies");
  }

  const execute = ({ name, user }) => {
    const category = new Category({
      name,
      slug: slugify(name),
      user,
    });

    return categoriesRepository.add(category);
  };

  return {
    execute,
  };
};
