const { Response } = require("../../frameworks/common");
const { deleteMenuUseCase } = require("../../useCases/menu");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteMenu = deleteMenuUseCase();
    console.log(id);
    const response = await deleteMenu.execute(id);
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
