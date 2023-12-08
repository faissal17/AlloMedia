const { deliveryPersonRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!deliveryPersonRepository) {
    throw new Error("The delivery person repository should be exist in dependancies");
  }
  const execute = () => {
    
    const all=  deliveryPersonRepository.getAll();
    //console.log('from fucking repository')
    return all
  };
  return { execute };
};
