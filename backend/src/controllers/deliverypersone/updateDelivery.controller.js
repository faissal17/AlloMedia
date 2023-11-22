const { Response } = require("../../frameworks/common");
const { updateDeliveryUseCase } = require('../../useCases/deliveryperson')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateDeliveryUseCase()
      const response = await useCaseInstance.execute({
        delivery: {
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
