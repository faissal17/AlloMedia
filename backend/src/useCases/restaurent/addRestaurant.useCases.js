const { Restaurant } = require("../../entities");
const {
  restaurantRepository,
} = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!restaurantRepository) {
    throw new Error("restaurantRepository should be in dependencies");
  }

  const execute = ({
    name,
    slug,
    picture,
    status,
    tags,
    brands,
    categories,
  }) => {
    const newRestaurant = new Restaurant({
      name,
      slug,
      picture,
      status,
      tags,
      brands,
      categories,
    });

    return restaurantRepository.add(newRestaurant);
  };

  return {
    execute,
  };
};
