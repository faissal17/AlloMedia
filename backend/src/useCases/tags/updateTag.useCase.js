const {tagsRepository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!tagsRepository){
        throw new Error('The tags repository should be exist in dependancies')
    }
    const execute=({
        tag
    })=>{
        return tagsRepository.update(tag)
    }
    return { execute }
}