const { Response } = require("../../frameworks/common");
const { getAllBrandUseCase } = require("../../useCases/brands");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllBrandUseCase();
    const response = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
