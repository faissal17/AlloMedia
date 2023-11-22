const { Response } = require("../../frameworks/common");
const { getCategoryByIdUseCase } = require("../../useCases/categories");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getCategoryByIdUseCase();
    const getCategory = await useCaseInstance.execute({ id });
    res.json(
      new Response({
        status: true,
        content: getCategory,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
