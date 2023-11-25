const { Response } = require("../../frameworks/common");
const { getAllItemUseCase } = require("../../useCases/items");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllItemUseCase();
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
