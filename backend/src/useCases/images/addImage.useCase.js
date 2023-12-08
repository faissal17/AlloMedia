const {User} =require('../../entities')
const slugify = require("slugify");
const {
    imagesRrpository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!imagesRrpository){
        throw new Error('The image repository should be exist in dependancies')
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
        return imagesRrpository.add(brand)
    }
    return { execute }
}