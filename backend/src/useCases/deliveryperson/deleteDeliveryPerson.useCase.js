const {deliveryPersonRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!deliveryPersonRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=(id)=>{
        console.log('usecases:',id)
        return deliveryPersonRepository.delete(id)
    }
    return { execute }
}