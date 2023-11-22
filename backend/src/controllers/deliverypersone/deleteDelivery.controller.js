const { Response } = require("../../frameworks/common");
const { deleteDeliveryUseCase } = require('../../useCases/deliveryperson')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {id} = req.body;
      console.log('id:',id)
      const useCaseInstance=deleteDeliveryUseCase()
      const response = await useCaseInstance.execute(id);
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

