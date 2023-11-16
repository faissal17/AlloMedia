const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
  const {
    useCases: {
      user: { addUserUseCase },
    },
  } = dependencies;

  const addUser = async (req, res, next) => {
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

      const addUser = addUserUseCase(dependencies);
      const response = await addUser.execute({
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

  return addUser;
};