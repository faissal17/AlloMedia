const { Response } = require("../../frameworks/common");
const { deleteCuisineUseCase } = require("../../useCases/cuisines");

module.exports = () => {
  return async (req, res, next) => {
    try {
      const { body = {} } = req;
      const { name } = body;
      const deleteCuisine = deleteCuisineUseCase();
      const response = await deleteCuisine.execute({
        cuisine: {
          name,
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
