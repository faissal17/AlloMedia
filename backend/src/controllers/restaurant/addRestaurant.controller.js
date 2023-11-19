const { Response } = require("../../frameworks/common");
const { addRestaurantUseCases } = require("../../useCases/restaurent");
module.exports = async (req, res) => {
  try {
    const { name, slug, picture, status, tags, brands, categories } = req.body;
    const useCaseInstance = addRestaurantUseCases();
    const addRestaurant = await useCaseInstance.execute({
      name,
      slug,
      picture,
      status,
      tags,
      brands,
      categories,
    });

    res.json(
      new Response({
        status: true,
        content: addRestaurant,
      })
    );
  } catch (err) {
    // next(err)
  }
};
