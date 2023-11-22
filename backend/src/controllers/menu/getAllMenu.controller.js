const { Response } = require("../../frameworks/common");
const { getAllMenuUseCase } = require("../../useCases/menu");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllMenuUseCase();
    const getAllMenu = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: getAllMenu,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
