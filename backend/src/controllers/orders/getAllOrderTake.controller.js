const { Response } = require("../../frameworks/common");
const { getAllOrderTakeUseCase } = require("../../useCases/orders");

module.exports = async (req, res) => {
  try {
    console.log('from order controller')
    const useCaseInstance = getAllOrderTakeUseCase();
    
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
