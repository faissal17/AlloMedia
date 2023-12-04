const { Response } = require("../../frameworks/common");
const { getAlldeliveryPersonUseCase } = require("../../useCases/deliveryperson");

module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAlldeliveryPersonUseCase();
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
