const { Response } = require("../../frameworks/common");
const { updateCategoryUseCase } = require("../../useCases/categories");
module.exports = async (req, res) => {
  try {
    const { id, ...updates } = req.body;
    const updateCategory = updateCategoryUseCase();
    const response = await updateCategory.execute({
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
