const { Response } = require("../../frameworks/common");
const { addUserUseCase } = require("../../useCases/users");
module.exports = async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, mobile } =
      req.body;
    console.log("Controller");
    console.log(req.body);
    console.log(
      "-------------------------------------------------------------------"
    );
    const useCaseInstance = addUserUseCase();
    const addUser = await useCaseInstance.execute({
      first_name,
      last_name,
      username,
      email,
      password,
      mobile,
    });
    res.json(
      new Response({
        status: true,
        content: addUser,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
