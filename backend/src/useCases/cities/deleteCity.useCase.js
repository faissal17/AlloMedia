const {citiesRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!citiesRepository){
        throw new Error('The brands repository should be exist in dependancies')
    }
    const execute=({
        city
    })=>{
        console.log('usecases:',city)
        return citiesRepository.delete(city)
    }
    return { execute }
}