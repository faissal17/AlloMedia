const bcrypt = require("../../config/bcrypt");
const { User } = require("../../entities");
const { usersRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!usersRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = async ({
    first_name,
    last_name,
    username,
    email,
    password,
    mobile,
  }) => {
    const user = new User({
      first_name,
      last_name,
      username,
      email,
      password: await bcrypt.hashPassword(password),
      mobile,
    });
    return usersRepository.add(user);
  };
  return { execute };
};
