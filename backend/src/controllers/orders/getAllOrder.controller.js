const { Response } = require("../../frameworks/common");
const { getAllOrderUseCase } = require("../../useCases/orders");

module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllOrderUseCase();
    const getAll = await useCaseInstance.execute();
    //console.log('controller')
    //console.log(getAll)
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
