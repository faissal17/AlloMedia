const addItemController=require('./addItem.controller')
const deleteItemController=require('./deleteItem.controller')
const updateItemController=require('./updateItem.controller')
const getItemByIdController=require('./getItemById.controller')


module.exports=dependencies=>{
    return {
        addItemController,
        deleteItemController,
        updateItemController,
        getItemByIdController
    }
}