const addImagesController=require('./addImage.controller')
const deleteImagesController=require('./deleteImage.controller')
const updateImagesController=require('./updateImage.controller')
const getImagesByIdController=require('./getImageById.controller')


module.exports=dependencies=>{
    return {
        addImagesController,
        deleteImagesController,
        updateImagesController,
        getImagesByIdController
    }
}