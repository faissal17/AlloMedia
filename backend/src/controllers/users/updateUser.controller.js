const { Response } = require("../../frameworks/common");
const { updateUserUseCase } = require('../../useCases/users')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        ...updates
      } = req.body;
      const useCaseInstance=updateUserUseCase()
      const response = await useCaseInstance.execute({
        user: {
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
      next();
    } catch (err) {
      next(err);
    }
  };
