const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
  const {
    useCases: {
      user: { deleteUserUseCase },
    },
  } = dependencies;

  return async (req, res, next) => {
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
      const deleteUser = deleteUserUseCase(dependencies);
      const response = await deleteUser.execute({
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
};
