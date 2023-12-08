const { Response } = require("../../frameworks/common");
const { updateTagUseCase } = require('../../useCases/tags')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateTagUseCase()
      const response = await useCaseInstance.execute({
        tag: {
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
