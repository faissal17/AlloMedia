const { Response } = require("../../frameworks/common");
const { filterRestaurantUseCase } = require("../../useCases/restaurent");

module.exports = async (req, res) => {
  try {
    const { search } = req.body;
    const useCaseInstance = filterRestaurantUseCase();
    const searchRestaurant = await useCaseInstance.execute(search);

    res.json(
      new Response({
        status: true,
        content: searchRestaurant,
      })
    );
    //next()
  } catch (err) {
    console.log(err);
  }
};
