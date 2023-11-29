const { Response } = require("../../frameworks/common");
const { getAllBrandsUseCase } = require("../../useCases/brands");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllBrandsUseCase();
    const getAll = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: getAll,
      })
    );
  } catch (error) {
    console.log(error)
  }
};
