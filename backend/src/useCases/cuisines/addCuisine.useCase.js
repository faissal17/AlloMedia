const { Cuisine } = require("../../entities");
const { cuisinesRepository } = require("../../frameworks/repositories/mongo");
const slugify = require("slugify");

module.exports = () => {
  if (!cuisinesRepository) {
    throw new Error("cuisinesRepository should be in dependencies");
  }

  const execute = ({ name, user }) => {
    const cuisine = new Cuisine({
      name,
      slug: slugify(name),
      user,
    });

    return cuisinesRepository.add(cuisine);
  };

  return {
    execute,
  };
};
