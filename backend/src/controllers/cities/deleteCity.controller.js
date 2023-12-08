const { Response } = require("../../frameworks/common");
const { deleteCityUseCase } = require('../../useCases/cities')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {id} = req.body;
      console.log('id:',id)
      const useCaseInstance=deleteCityUseCase()
      const response = await useCaseInstance.execute({
        city: {id},
      });
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

