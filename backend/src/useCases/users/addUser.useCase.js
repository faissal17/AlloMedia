const {User} =require('../../entities')
const {
    usersRepository,
  } = require("../../frameworks/repositories/inMemory");
module.exports=() =>{
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        firstName,
        lastName,
        email,
        password,
        role,
        image,
        phone,
        address,
        gender,
        meta,
    })=>{
        console.log('services')
        console.log(firstName,lastName,email,password,role,image,phone,address,gender,meta)
        console.log('----------------------------------------------------------')
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            role,
            image,
            phone,
            address,
            gender,
            meta})
        return usersRepository.add(user)
    }
    return { execute }
}