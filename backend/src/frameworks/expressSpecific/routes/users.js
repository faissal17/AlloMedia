const express=require('express')
const { userControllers } = require("../../../controllers");

module.exports=dependencies =>{
    const router=express.Router()
    const {
        addUserController,
        deleteUserController,
        updateUserController,
        getUserByIdController
    }=userControllers(dependencies)

    router.route('/')
        .post(addUserController)
        .delete(deleteUserController)
        .patch(updateUserController)

    router.route('/:id').get(getUserByIdController)

    return router
}