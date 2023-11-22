const {tagsRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!tagsRepository){
        throw new Error('The tags repository should be exist in dependancies')
    }
    const execute=({
        id
    })=>{
        return tagsRepository.getById(id)
    }
    return { execute }
}