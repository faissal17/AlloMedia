const { Response } = require("../../frameworks/common");
const { deleteTagUseCase } = require('../../useCases/tags')
module.exports = async (req,res) => {
    try {
      const {id} = req.body;
      console.log('controller id:',id)
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
    } catch (err) {
      console.log(err)
    }
  };

