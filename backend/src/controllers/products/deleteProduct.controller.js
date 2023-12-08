const { Response } = require("../../frameworks/common");
const { deleteProductUseCase } = require("../../useCases/products");
module.exports = async (req, res) => {
  try {
    const { body = {} } = req;
    const { name, description, images, price, color, meta } = body;
    const useCaseInstance = deleteProductUseCase();
    const response = await useCaseInstance.execute({
      product: {
        name,
        description,
        images,
        price,
        color,
        meta,
      },
    });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
    // next()
  } catch (err) {
    //next(err)
  }
};
