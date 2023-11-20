const express=require('express')
const { itemController } = require("../../../controllers");

module.exports=dependencies =>{
    const router=express.Router()
    const {
        addItemController,
        deleteItemController,
        updateItemController,
        getItemByIdController
    }=itemController(dependencies)

    router.route('/')
        .post(addItemController)
        .delete(deleteItemController)
        .patch(updateItemController)

    router.route('/:id').get(getItemByIdController)

    return router
}