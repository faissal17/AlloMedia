const { Response } = require("../../frameworks/common");
const {addUserUseCase} =require('../../useCases/users')
module.exports = async (req,res) => {
  
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        role,
        image,
        phone,
        address,
        gender,
        meta,
    } = req.body;
      console.log('Controller')
      console.log(req.body)
      console.log('-------------------------------------------------------------------')
      const useCaseInstance = addUserUseCase();
      const addUser = await useCaseInstance.execute({
        firstName,
        lastName,
        email,
        password,
        role,
        image,
        phone,
        address,
        gender,
        meta,
        gender,
        meta,
      })
      res.json(
        new Response({
          status: true,
          content: addUser,
        })
      );
    } catch (err) {
      console.log(err)
    }
  };