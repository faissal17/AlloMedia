const { Response } = require("../../frameworks/common");
const { deleteUserUseCase } = require('../../useCases/users')
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
      const useCaseInstance=deleteUserUseCase()
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

