const { Response } = require("../../frameworks/common");
const {addTagUseCase} =require('../../useCases/tags')
module.exports = async (req,res) => {
    try {
      const {
        name
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addTagUseCase();
      const addTag = await useCaseInstance.execute({
        name:name
      })
      res.json(
        new Response({
          status: true,
          content: addTag
        })
      );
    } catch (err) {
      console.log(err)
    }
  };