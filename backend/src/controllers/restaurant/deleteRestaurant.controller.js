const { Response } = require("../../frameworks/common");
const { deleteRestaurantUseCases } = require("../../useCases/restaurent");
{
  deleteRestaurantUseCases;
}
module.exports = async (req, res) => {
  try {
    const { body = {} } = req;
    const { name, slug, picture, status, tags, brands, categories } = body;
    useCaseInstance = deleteRestaurantUseCases();
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
    });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (error) {
    console.log(error.massage);
  }
};
