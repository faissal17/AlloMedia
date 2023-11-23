const { Response } = require("../../frameworks/common");
const { deleteORderDetailsUseCase } = require("../../useCases/orderdetails");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteOrderDeatils = deleteORderDetailsUseCase();
    const response = await deleteOrderDeatils.execute({ id });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
