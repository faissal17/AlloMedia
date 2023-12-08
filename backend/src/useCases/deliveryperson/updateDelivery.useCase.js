const {deliveryPersonRepository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!deliveryPersonRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        delivery
    })=>{
        console.log('use cases delivery;',delivery)
        return deliveryPersonRepository.update(delivery)
    }
    return { execute }
}