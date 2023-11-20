const express=require('express')
const { tagController } = require("../../../controllers");

module.exports=dependencies =>{
    const router=express.Router()
    const {
        addTagController,
        deleteTagController,
        updateTagController,
        getTagByIdController
    }=tagController(dependencies)

    router.route('/')
        .post(addTagController)
        .delete(deleteTagController)
        .patch(updateTagController)

    router.route('/:id').get(getTagByIdController)

    return router
}