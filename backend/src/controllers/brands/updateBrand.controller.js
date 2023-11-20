const { Response } = require("../../frameworks/common");
const { updateBrandUseCase } = require('../../useCases/brands')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateBrandUseCase()
      const response = await useCaseInstance.execute({
        brand: {
          id,
          updates
        },
      });
      res.json(
        new Response({
          status: true,
          content: response,
        })
      );
      //next();
    } catch (err) {
      console.log(err)
    }
  };
