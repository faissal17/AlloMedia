const { Restaurant } = require("../../entities");
const { restaurantRepository } = require("../../frameworks/repositories/mongo");
const slugify = require("slugify");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("restaurantRepository should be in dependencies");
  }

  const execute = ({
    name,
    tags,
    brands,
    categories,
    description,
    localisation,
    menu,
  }) => {
    const restaurant = {
      name,
      slug: slugify(name),
      brands,
      tags,
      categories,
      description,
      localisation,
      menu,
    };

    return restaurantRepository.add(restaurant);
  };

  return {
    execute,
  };
};
