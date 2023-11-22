const { Response } = require("../../frameworks/common");
const {addDeliveryUseCase} =require('../../useCases/deliveryperson')
module.exports = async (req,res) => {
    try {
      const {
        user,
        cartNational
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addDeliveryUseCase();
      const addDelivery = await useCaseInstance.execute({
        user,
        cartNational
      })
      res.json(
        new Response({
          status: true,
          content: addDelivery,
        })
      );
    } catch (err) {
      console.log(err)
    }
  };