const {usersRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        user
    })=>{
        console.log('usecases:',user)
        return usersRepository.delete(user)
    }
    return { execute }
}