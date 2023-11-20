const { Response } = require("../../frameworks/common");
const { deleteTagUseCase } = require('../../useCases/tags')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {id} = req.body;
      console.log('id:',id)
      const useCaseInstance=deleteTagUseCase()
      const response = await useCaseInstance.execute({
        tag: {id},
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

