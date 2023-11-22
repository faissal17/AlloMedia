const { deliveryPersonRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!deliveryPersonRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = async ({
    user,
    cartNational
  }) => {
    const deliveryPerson ={
      user,
      cartNational
    };
    console.log("use cases:", deliveryPerson);
    return deliveryPersonRepository.add(deliveryPerson);
  };
  return { execute };
};
