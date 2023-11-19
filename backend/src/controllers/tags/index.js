const addTagController=require('./addTag.controller')
const deleteTagController=require('./deleteTag.controller')
const updateTagController=require('./updateTag.controller')
const getTagByIdController=require('./getTagById.controller')


module.exports=dependencies=>{
    return {
        addTagController,
        deleteTagController,
        updateTagController,
        getTagByIdController
    }
}