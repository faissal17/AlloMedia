const { categoriesRepository } = require("../../frameworks/repositories/mongo");
const slugify = require("slugify");

module.exports = () => {
  //   const { cuisineRepository } = dependencies;
  if (!categoriesRepository) {
    throw new Error("The category repository should be exist in dependancies");
  }
  const execute = (category) => {
    if (category.updates.name) {
      category.updates.slug = slugify(category.updates.name);
    }
    return categoriesRepository.update(category);
  };
  return { execute };
};
