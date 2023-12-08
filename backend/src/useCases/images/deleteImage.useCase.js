const {imagesRrpository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!imagesRrpository){
        throw new Error('The brands repository should be exist in dependancies')
    }
    const execute=({
        brand
    })=>{
        console.log('usecases:',brand)
        return imagesRrpository.delete(brand)
    }
    return { execute }
}