const { Response } = require("../../frameworks/common");
const { getAllCityUseCase } = require("../../useCases/cities");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllCityUseCase();
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
