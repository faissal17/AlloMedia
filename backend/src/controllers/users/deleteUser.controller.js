const { Response } = require("../../frameworks/common");
const { deleteUserUseCase } = require('../../useCases/users')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {id} = req.body;
      console.log('id:',id)
      const useCaseInstance=deleteUserUseCase()
      const response = await useCaseInstance.execute({
        user: {id},
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

