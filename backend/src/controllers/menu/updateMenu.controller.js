const { Response } = require("../../frameworks/common");
const { updateMenuUseCase } = require("../../useCases/menu");
module.exports = async (req, res) => {
  try {
    const { id, ...updates } = req.body;

    const updateMenu = updateMenuUseCase();
    const response = await updateMenu.execute({
      id,
      updates,
    });
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
