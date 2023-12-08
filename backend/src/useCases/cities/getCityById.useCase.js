const {citiesRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!citiesRepository){
        throw new Error('The cities repository should be exist in dependancies')
    }
    const execute=({
        id
    })=>{
        return citiesRepository.getById(id)
    }
    return { execute }
}