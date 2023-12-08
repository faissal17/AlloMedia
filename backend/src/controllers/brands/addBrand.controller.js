const { Response } = require("../../frameworks/common");
const {addBrandUseCase} =require('../../useCases/brands')
module.exports = async (req,res) => {
    try {
      const {
        name
    } = req.body;
    const user = req.user;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addBrandUseCase();
      const addBrand = await useCaseInstance.execute({
        name,
        user
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