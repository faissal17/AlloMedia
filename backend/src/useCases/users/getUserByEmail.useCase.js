const { User } = require("../../entities");
const { usersRepository } = require("../../frameworks/repositories/inMemory");

module.exports = () => {
  if (!usersRepository) {
    throw new Error("usersRepository should be in dependencies");
  }

  const execute = ({ email, password }) => {
    const user = new User({
      email,
      password,
    });

    return usersRepository.getByEmail(user);
  };

  return {
    execute,
  };
};
