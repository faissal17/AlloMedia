const { Response } = require("../../frameworks/common");
const { updateCityUseCase } = require('../../useCases/cities')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateCityUseCase()
      const response = await useCaseInstance.execute({
        city: {
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
