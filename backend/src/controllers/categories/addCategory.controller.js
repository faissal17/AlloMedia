const { Response } = require("../../frameworks/common");
const { addCategoryUseCase } = require("../../useCases/categories");

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = req.user;
    const useCaseInstance = addCategoryUseCase();
    const addCategory = await useCaseInstance.execute({
      name,
      user,
    });

    res.json(
      new Response({
        status: true,
        content: addCategory,
      })
    );
    next();
  } catch (err) {
    next(err);
  }
};
