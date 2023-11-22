const {usersRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        id
    })=>{
        return usersRepository.getById(id)
    }
    return { execute }
}