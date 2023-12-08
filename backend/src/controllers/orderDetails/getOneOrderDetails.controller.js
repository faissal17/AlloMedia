const { Response } = require("../../frameworks/common");
const { getOneORderDetailsUseCase } = require("../../useCases/orderdetails");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getOneORderDetailsUseCase();
    const getOneOrderDetails = await useCaseInstance.execute({ id });
    res.json(
      new Response({
        status: true,
        content: getOneOrderDetails,
      })
    );
  } catch (err) {
    res.json(
      new Response({
        status: true,
        error: "OrderDetails not Found",
      })
    );
  }
};
