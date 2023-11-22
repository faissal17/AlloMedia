const { Response } = require("../../frameworks/common");
const { updateImageUseCase } = require('../../useCases/images')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateImageUseCase()
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
