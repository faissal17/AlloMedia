const { Response } = require("../../frameworks/common");
const { addRoleUseCase } = require("../../useCases/roles");

module.exports = async (req, res, next) => {
  try {
    const { role } = req.body;
    const useCaseInstance = addRoleUseCase();
    const addRole = await useCaseInstance.execute({
      role,
    });

    res.json(
      new Response({
        status: true,
        content: addRole,
      })
    );
    next();
  } catch (err) {
    next(err);
  }
};
