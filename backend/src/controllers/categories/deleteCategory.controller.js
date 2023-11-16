const { Response } = require("../../frameworks/common");
const { deleteCategoryUseCase } = require("../../useCases/categories");

module.exports = async (req, res) => {
  try {
    const { id, name } = req.body;
    const daleteCategory = deleteCategoryUseCase();
    const response = await daleteCategory.execute({
      cuisine: {
        id,
        name,
      },
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
