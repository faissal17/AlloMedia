const { Response } = require("../../frameworks/common");
const { getAllTagUseCase } = require("../../useCases/tags");
module.exports = async (req, res) => {
  try {
    const useCaseInstance = getAllTagUseCase();
    const response = await useCaseInstance.execute();
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (err) {
    //next(err)
    res.status(400).json({ msg: err.message });
  }
};
