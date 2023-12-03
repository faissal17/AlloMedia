const express=require('express')
const { deliveryPersonController } = require("../../../controllers");

module.exports=dependencies =>{
    const router=express.Router()
    const {
        addDeliveryController,
        deleteDeliveryController,
        updateDeliveryController,
        getDeliveryByIdController,
        getAllDeliveryController
    }=deliveryPersonController(dependencies)

    router.route('/')
        .post(addDeliveryController)
        .delete(deleteDeliveryController)
        .patch(updateDeliveryController)
        .get(getAllDeliveryController)

    router.route('/:id').get(getDeliveryByIdController)

    return router
}