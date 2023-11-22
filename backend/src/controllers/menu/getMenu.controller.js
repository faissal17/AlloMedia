const { Response } = require("../../frameworks/common");
const { getMenuByIdUseCase } = require("../../useCases/menu");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getMenuByIdUseCase();
    const getMenu = await useCaseInstance.execute({ id });
    res.json(
      new Response({
        status: true,
        content: getMenu,
      })
    );
  } catch (err) {
    res.json(
      new Response({
        status: true,
        error: "Menu not Found",
      })
    );
  }
};
