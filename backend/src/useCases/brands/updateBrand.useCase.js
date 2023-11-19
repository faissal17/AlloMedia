const {brandsRepository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!brandsRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        brand
    })=>{
        return brandsRepository.update(brand)
    }
    return { execute }
}