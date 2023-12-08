const { Response } = require("../../frameworks/common");
const { addOrderDetailsUseCase } = require("../../useCases/orderdetails");

module.exports = async (req, res, next) => {
  try {
    const { order, item, quantity } = req.body;
    const useCaseInstance = addOrderDetailsUseCase();
    const addOrderDetails = await useCaseInstance.execute({
      order,
      item,
      quantity,
    });
    res.json(
      new Response({
        status: true,
        content: addOrderDetails,
      })
    );
    next();
  } catch (err) {
    next(err);
  }
};
