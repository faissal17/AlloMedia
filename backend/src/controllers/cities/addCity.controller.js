const { Response } = require("../../frameworks/common");
const {addCityUseCase} =require('../../useCases/cities')
module.exports = async (req,res) => {
    try {
      const {
        name
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addCityUseCase();
      const addCity = await useCaseInstance.execute({
        name
      })
      res.json(
        new Response({
          status: true,
          content: addCity,
        })
      );
    } catch (err) {
      console.log(err)
    }
  };