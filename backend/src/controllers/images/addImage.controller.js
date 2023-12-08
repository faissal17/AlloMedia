const { Response } = require("../../frameworks/common");
const {addImageUseCase} =require('../../useCases/images')
module.exports = async (req,res) => {
    console.log("req.body",req.body)
    console.log("req.file",req.file)
    return 
    try {
      const {
        name
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addImageUseCase();
      const addBrand = await useCaseInstance.execute({
        name
      })
      res.json(
        new Response({
          status: true,
          content: addBrand,
        })
      );
    } catch (err) {
      console.log(err)
    }
  };