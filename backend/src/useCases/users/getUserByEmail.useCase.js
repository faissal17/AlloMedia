const bcrypt = require("../../config/bcrypt");
const jsonWebToken = require("../../config/jsonWebToken");
const { User } = require("../../entities");
const { usersRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!usersRepository) {
    throw new Error("usersRepository should be in dependencies");
  }

  const execute = async ({ email, _password }) => {
    const user = new User({
      email,
      _password,
    });

    const getUser = await usersRepository.getByEmail(user);

    const { password, _id, first_name, last_name, role } = getUser;

    console.log("user", getUser);

    const isPasswordCorrect = await bcrypt.comparePassword(_password, password);
    console.log(isPasswordCorrect);
    if (isPasswordCorrect) {
      const token = await jsonWebToken.sign({
        _id,
        email,
        first_name,
        last_name,
        role,
      });

      return {
        token,
        getUser,
      };
    }
    throw new Error("Email and Password is incorrect");
  };

  return {
    execute,
  };
};
