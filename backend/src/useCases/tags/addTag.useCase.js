
const {
    tagsRepository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!tagsRepository){
        throw new Error('The tags repository should be exist in dependancies')
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
        const tag={
            name:name,
        }
        console.log('vefore repository',tag)
        return tagsRepository.add(tag)
    }
    return { execute }
}