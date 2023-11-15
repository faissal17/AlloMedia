const { Response } = require("../../frameworks/common");
const { getCuisineByIdUseCase } = require("../../useCases/cuisines");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getCuisineByIdUseCase();
    const getCuisine = await useCaseInstance.execute({ id });
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

