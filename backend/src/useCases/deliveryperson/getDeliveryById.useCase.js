const {deliveryPersonRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!deliveryPersonRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=(id)=>{
        return deliveryPersonRepository.getById(id)
    }
    return { execute }
}