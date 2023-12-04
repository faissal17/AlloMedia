const { Response } = require("../../frameworks/common");
const { getAllOrderConfirmUseCase } = require("../../useCases/orders");

module.exports = async (req, res) => {
  try {
    console.log('from order controller')
    const useCaseInstance = getAllOrderConfirmUseCase();
    
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
