const { Response } = require("../../frameworks/common");
const { updateCuisineUseCase } = require("../../useCases/cuisines");
module.exports = () => {
  return async (req, res, next) => {
    try {
      const { body = {} } = req;
      const { name } = body;
      const updateCuisine = updateCuisineUseCase(body);
      const response = await updateCuisine.execute({
        Cuisine: {
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
