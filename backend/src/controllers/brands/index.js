const addBrandController=require('./addBrand.controller')
const deleteBrandController=require('./deleteBrand.controller')
const updateBrandController=require('./updateBrand.controller')
const getBrandByIdController=require('./getBrandById.controller')


module.exports=dependencies=>{
    return {
        addBrandController,
        deleteBrandController,
        updateBrandController,
        getBrandByIdController
    }
}