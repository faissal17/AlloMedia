const { Response } = require("../../frameworks/common");
const { updateItemUseCase } = require('../../useCases/items')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      console.log(id)
      console.log(updates)
      const useCaseInstance=updateItemUseCase()
      const response = await useCaseInstance.execute({
        item: {
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
