const { Response } = require("../../frameworks/common");
const { getRestaurantByIdUseCases } = require("../../useCases/restaurent");

module.exports = async (req, res) => {
  console.log("godamn");

  try {
    const { id } = req.params;
    const useCaseInstance = getRestaurantByIdUseCases();

    console.log("before");
    // Call the execute method on the use case instance
    const getRestaurantById = await useCaseInstance.execute(id);
    console.log("after");

    res.json(
      new Response({
        status: true,
        content: getRestaurantById,
      })
    );
    //next()
  } catch (err) {
    console.log(err);
  }
};
