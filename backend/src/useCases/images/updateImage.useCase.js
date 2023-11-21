const {imagesRrpository} =require('../../frameworks/repositories/mongo')
module.exports=() =>{
    if(!imagesRrpository){
        throw new Error('The users repository should be exist in dependancies')
    }
    const execute=({
        brand
    })=>{
        return imagesRrpository.update(brand)
    }
    return { execute }
}