const { Response } = require("../../frameworks/common");
const { addMenuUseCase } = require("../../useCases/menu");

module.exports = async (req, res, next) => {
  try {
    const { name, restaurantId, items } = req.body;
    const useCaseInstance = addMenuUseCase();
    const addMenu = await useCaseInstance.execute({
      name,
      restaurantId,
      items,
    });
    res.json(
      new Response({
        status: true,
        content: addMenu,
      })
    );
    next();
  } catch (err) {
    next(err);
  }
};
