const {User} =require('../../entities')
const slugify = require("slugify");
const {
    brandsRepository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!brandsRepository){
        throw new Error('The brands repository should be exist in dependancies')
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
        const brand={
            name:name,
            slug:slugify(name)
        }
        console.log('vefore repository',brand)
        return brandsRepository.add(brand)
    }
    return { execute }
}