const { cuisinesRepository } = require("../../frameworks/repositories/mongo");

const slugify = require("slugify");
module.exports = () => {
  //   const { cuisinesRepository } = dependencies;
  if (!cuisinesRepository) {
    throw new Error("The cuisine repository should be exist in dependancies");
  }
  const execute = (cuisine) => {
    if (cuisine.updates.name) {
      cuisine.updates.slug = slugify(cuisine.updates.name);
    }
    return cuisinesRepository.update(cuisine);
  };
  return { execute };
};
