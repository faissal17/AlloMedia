const { Restaurant } = require("../../entities");
const {
  restaurantRepository,
} = require("../../frameworks/repositories/mongo");
const slugify=require('slugify')

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("restaurantRepository should be in dependencies");
  }

  const execute = ({
    name,
    tags,
    brands,
    categories,
    description
  }) => {
    const restaurant={
      name,
      slug:slugify(name),
      brands,
      tags,
      categories,
      description,
    }
      

    return restaurantRepository.add(restaurant);
  };

  return {
    execute,
  };
};
