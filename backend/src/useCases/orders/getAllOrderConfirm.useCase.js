const { orderRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!orderRepository) {
    throw new Error("The item order should be exist in dependancies");
  }
  const execute = () => {
    
    const all=  orderRepository.getAllConfirm();
    //console.log('from fucking repository')
    return all
  };
  return { execute };
};
