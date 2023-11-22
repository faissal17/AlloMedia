const addDeliveryController=require('./addDelivery.controller')
const deleteDeliveryController=require('./deleteDelivery.controller')
const updateDeliveryController=require('./updateDelivery.controller')
const getDeliveryByIdController=require('./getDeliveryById.controller')


module.exports=dependencies=>{
    return {
        addDeliveryController,
        deleteDeliveryController,
        updateDeliveryController,
        getDeliveryByIdController
    }
}