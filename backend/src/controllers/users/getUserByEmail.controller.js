const { Response } = require("../../frameworks/common");
const { getUserByEmailUseCase } = require("../../useCases/users");
module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const useCaseInstance = getUserByEmailUseCase();
    const { getUser, token } = await useCaseInstance.execute({
      email,
      _password: password,
    });
    res.cookie("_cks_ui", token, {
      secure: true,
    });


    return res.json(
      new Response({
        status: true,
        content: getUser,
      })
    );
  } catch (err) {
    return res.json(
      new Response({
        status: false,
        error: err.message,
      })
    );
  }
};
