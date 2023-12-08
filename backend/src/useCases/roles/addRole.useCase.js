const { Role } = require("../../entities");
const { roleRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!roleRepository) {
    throw new Error("roleRepository should be in dependencies");
  }

  const execute = ({ role }) => {
    const _role = new Role({
      role,
    });


    return roleRepository.add(_role);
  };

  return {
    execute,
  };
};
