const { Response } = require("../../frameworks/common");
const {addItemUseCase} =require('../../useCases/items')
module.exports = async (req,res) => {
    try {
      const {
        ...item
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addItemUseCase();
      const addItem = await useCaseInstance.execute({
        ...item
      })
      res.json(
        new Response({
          status: true,
          content: addItem
        })
      );
    } catch (err) {
      console.log(err)
    }
  };