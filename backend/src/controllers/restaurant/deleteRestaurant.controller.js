const { Response } = require("../../frameworks/common");
const { deleteRestaurantUseCases } = require("../../useCases/restaurent");
module.exports = async (req, res) => {
  try {
    const {id}=req.body
    const useCaseInstance = deleteRestaurantUseCases();
    console.log('controller id:',id)
    const response = await useCaseInstance.execute(id);
    res.json(
      new Response({
        status: true,
        content: response,
      })
    );
  } catch (error) {
    console.log(error.massage);
  }
};
