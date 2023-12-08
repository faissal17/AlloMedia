const {citiesRepository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!citiesRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        city
    })=>{
        return citiesRepository.update(city)
    }
    return { execute }
}