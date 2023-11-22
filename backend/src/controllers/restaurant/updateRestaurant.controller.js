const { Response } = require("../../frameworks/common");
const { updateRestaurantUseCases } = require("../../useCases/restaurent");
{
  updateRestaurantUseCases;
}
module.exports = async (req, res) => {
  try {
    const { body = {} } = req;
    const { id,...updates } = req.body;
    const useCaseInstance = updateRestaurantUseCases();
    const response = await useCaseInstance.execute(
      id,
      updates,
    );
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
