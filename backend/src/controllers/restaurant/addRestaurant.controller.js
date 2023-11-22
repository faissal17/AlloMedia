const { Response } = require("../../frameworks/common");
const { addRestaurantUseCases } = require("../../useCases/restaurent");
module.exports = async (req, res) => {
  try {
    const { 
      name,
      tags,
      brands,
      categories,
      description
    } = req.body;
    console.log('category restaurant')
    console.log('req.body',req.body)
    const useCaseInstance = addRestaurantUseCases();
    const addRestaurant = await useCaseInstance.execute({
      name,
      tags,
      brands,
      categories,
      description
    });

    res.json(
      new Response({
        status: true,
        content: addRestaurant,
      })
    );
  } catch (err) {
    // next(err)
  }
};
