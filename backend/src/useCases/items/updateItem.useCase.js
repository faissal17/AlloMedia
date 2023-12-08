const {itemsRepository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!itemsRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        item
    })=>{
        console.log('repository')
        console.log(item)
        return itemsRepository.update(item)
    }
    return { execute }
}