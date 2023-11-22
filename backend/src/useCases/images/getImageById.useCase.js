const {imagesRrpository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!imagesRrpository){
        throw new Error('The brands repository should be exist in dependancies')
    }
    const execute=({
        id
    })=>{
        return imagesRrpository.getById(id)
    }
    return { execute }
}