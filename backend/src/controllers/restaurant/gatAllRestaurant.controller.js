const { Response } = require("../../frameworks/common");
const { getAllRestaurantUseCase } = require("../../useCases/restaurent");

module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllRestaurantUseCase();
    console.log('controller rest')
    const getAllRestaurant = await useCaseInstance.execute();

    res.json(
      new Response({
        status: true,
        content: getAllRestaurant,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
