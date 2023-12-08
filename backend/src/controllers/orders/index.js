const addOrderController=require('./addOrder.controller')
const getOrderByIdController=require('./getOrderById.controller')
const deleteOrderController=require('./deleteOrder.controller')
const updateOrderController=require('./updateOrder.controller')
const getAllOrderController=require('./getAllOrder.controller')
const getAllOrderConfirmController=require('./getAllOrderConfirm.controller')
const updateOrderDeliveryController=require('./updateOrderDelivery.controller')
const getAllOrderTakeController=require('./getAllOrderTake.controller')


module.exports=dependencies=>{
    return {
        addOrderController,
        getOrderByIdController,
        deleteOrderController,
        updateOrderController,
        getAllOrderController,
        getAllOrderConfirmController,
        updateOrderDeliveryController,
        getAllOrderTakeController
    }
}