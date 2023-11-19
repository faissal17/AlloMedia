const {brandsRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!brandsRepository){
        throw new Error('The brands repository should be exist in dependancies')
    }
    const execute=({
        brand
    })=>{
        console.log('usecases:',brand)
        return brandsRepository.delete(brand)
    }
    return { execute }
}