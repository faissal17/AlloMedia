const { deliveryPersonRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!deliveryPersonRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = async (deliveryPersone) => {
    
    console.log("use cases:", deliveryPersone);
    return deliveryPersonRepository.add(deliveryPersone);
  };
  return { execute };
};
