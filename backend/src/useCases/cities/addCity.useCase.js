const {User} =require('../../entities')
const slugify = require("slugify");
const {
    citiesRepository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!citiesRepository){
        throw new Error('The cities repository should be exist in dependancies')
    }
    const execute=({
        name,
    })=>{
        
        // const user = new User({
        //     first_name,
        //     last_name,
        //     username,
        //     email,
        //     password, 
        //     mobile,})
        const city={
            name:name,
            slug:slugify(name)
        }
        console.log('vefore repository',city)
        return citiesRepository.add(city)
    }
    return { execute }
}