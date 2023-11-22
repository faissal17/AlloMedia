const { Response } = require("../../frameworks/common");
const { updateCuisineUseCase } = require("../../useCases/cuisines");
module.exports = async (req, res) => {
  try {
    const { id, ...updates } = req.body;
    const updateCuisine = updateCuisineUseCase();
    const response = await updateCuisine.execute({
      id,
      updates,
    });
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
