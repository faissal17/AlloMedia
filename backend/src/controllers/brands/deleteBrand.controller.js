const { Response } = require("../../frameworks/common");
const { deleteBrandUseCase } = require('../../useCases/brands')
module.exports = async (req, res) => {
  try {
    const { body = {} } = req;
    const { id } = req.body;
    console.log('id:', id)
    const useCaseInstance = deleteBrandUseCase()
    const response = await useCaseInstance.execute({
      brand: { id },
    });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
    //next();
  } catch (err) {
    //next(err);
    console.log(err)
  }
};
