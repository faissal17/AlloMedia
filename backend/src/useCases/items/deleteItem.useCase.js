const {itemsRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!itemsRepository){
        throw new Error('The items repository should be exist in dependancies')
    }
    const execute=({
        item
    })=>{
        console.log('usecases:',item)
        return itemsRepository.delete(item)
    }
    return { execute }
}