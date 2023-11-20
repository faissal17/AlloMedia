const { Response } = require("../../frameworks/common");
const { getAllCategoryUseCase } = require("../../useCases/categories");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllCategoryUseCase();
    const getAll = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: getAll,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
