const {usersRepository} =require('../../frameworks/repositories/inMemory')
module.exports=()=>{
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        user
    })=>{
        return usersRepository.delete(user)
    }
    return { execute }
}