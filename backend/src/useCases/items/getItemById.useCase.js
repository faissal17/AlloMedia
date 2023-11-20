const {itemsRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!itemsRepository){
        throw new Error('The brands repository should be exist in dependancies')
    }
    const execute=({
        id
    })=>{
        return itemsRepository.getById(id)
    }
    return { execute }
}