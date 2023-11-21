const { Response } = require("../../frameworks/common");
const { deleteCuisineUseCase } = require("../../useCases/cuisines");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteCuisine = deleteCuisineUseCase();
    const response = await deleteCuisine.execute({ id });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
