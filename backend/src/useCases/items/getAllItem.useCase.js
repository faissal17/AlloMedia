const { itemsRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!itemsRepository) {
    throw new Error("The item repository should be exist in dependancies");
  }
  const execute = () => {
    
    const all=  itemsRepository.getAll();
    //console.log('from fucking repository')
    return all
  };
  return { execute };
};
