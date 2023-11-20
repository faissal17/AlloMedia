const { Response } = require("../../frameworks/common");
const { updateRestaurantUseCases } = require("../../useCases/restaurent");
{
  updateRestaurantUseCases;
}
module.exports = async (req, res) => {
  try {
    const { body = {} } = req;
    const { name, slug, picture, status, tags, brands, categories } = body;
    const { id } = req.params;
    const useCaseInstance = updateRestaurantUseCases();
    const response = await useCaseInstance.execute({
      restaurant: {
        name,
        slug,
        picture,
        status,
        tags,
        brands,
        categories,
      },
      id: id,
    });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (error) {
    console.log(error.message);
  }
};
