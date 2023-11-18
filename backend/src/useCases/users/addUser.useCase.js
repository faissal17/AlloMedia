const {User} =require('../../entities')
const {
    usersRepository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        first_name,
        last_name,
        username,
        email,
        password, 
        mobile,
    })=>{
        console.log('services')
        console.log(first_name,
            last_name,
            username,
            email,
            password, 
            mobile,)
        console.log('----------------------------------------------------------')
        const user = new User({
            first_name,
            last_name,
            username,
            email,
            password, 
            mobile,})
        console.log('vefore repository',user)
        return usersRepository.add(user)
    }
    return { execute }
}