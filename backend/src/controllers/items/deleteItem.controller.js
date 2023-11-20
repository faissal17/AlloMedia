const { Response } = require("../../frameworks/common");
const { deleteItemUseCase } = require('../../useCases/items')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {id} = req.body;
      console.log('id:',id)
      const useCaseInstance=deleteItemUseCase()
      const response = await useCaseInstance.execute({
        item: {id},
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

