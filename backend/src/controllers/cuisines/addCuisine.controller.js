const { Response } = require("../../frameworks/common");
const { addCuisineUseCase } = require("../../useCases/cuisines");

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = req.user;
    const useCaseInstance = addCuisineUseCase();
    const addCuisine = await useCaseInstance.execute({
      name,
      user,
    });

    res.json(
      new Response({
        status: true,
        content: addCuisine,
      })
    );
    next();
  } catch (err) {
    next(err);
  }
};
