const { Response } = require("../../frameworks/common");
const { getRestaurantByIdUseCases } = require("../../useCases/restaurent");

module.exports = async (req, res) => {
  console.log("godamn");

  try {
    const { slug } = req.params;
    console.log(slug);
    const useCaseInstance = getRestaurantByIdUseCases();
    const getRestaurantByslug = await useCaseInstance.execute(slug);

    console.log("getRestaurantByslug", getRestaurantByslug);

    res.json(
      new Response({
        status: true,
        content: getRestaurantByslug,
      })
    );
    //next()
  } catch (err) {
    console.log(err);
  }
};
