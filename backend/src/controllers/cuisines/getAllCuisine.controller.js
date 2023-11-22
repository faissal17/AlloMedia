const { Response } = require("../../frameworks/common");
const { getAllCuisineUseCase } = require("../../useCases/cuisines");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllCuisineUseCase();
    const getCuisine = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: getCuisine,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
