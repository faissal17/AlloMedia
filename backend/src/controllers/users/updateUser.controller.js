const { Response } = require("../../frameworks/common");
const { updateUserUseCase } = require('../../useCases/users')
module.exports = async (req,res) => {
    try {
      const { body = {} } = req;
      const {
        id,
        firstName,
        lastName,
        email,
        password,
        role,
        image,
        phone,
        address,
        gender,
        meta,
      } = body;
      const useCaseInstance=updateUserUseCase()
      const response = await useCaseInstance.execute({
        user: {
          id,
          firstName,
          lastName,
          email,
          password,
          role,
          image,
          phone,
          address,
          gender,
          meta,
          gender,
          meta,
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
