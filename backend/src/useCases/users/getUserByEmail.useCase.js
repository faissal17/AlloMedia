const { User } = require("../../entities");
const { usersRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!usersRepository) {
    throw new Error("usersRepository should be in dependencies");
  }

  const execute = ({ email, password }) => {
    const user = new User({
      email,
      password,
    });

    const getUser = usersRepository.getByEmail(user);

    return getUser;
  };

  return {
    execute,
  };
};
