const bcrypt = require("../../config/bcrypt");
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

    const { password } = getUser;

    const isPasswordCorrect = await bcrypt.comparePassword(_password, password);
    if (isPasswordCorrect) {
      return getUser;
    }
    throw new Error("Email and Password is incorrect");
  };

  return {
    execute,
  };
};
