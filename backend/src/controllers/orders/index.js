const addOrderController=require('./addOrder.controller')
const getOrderByIdController=require('./getOrderById.controller')
const deleteOrderController=require('./deleteOrder.controller')
const updateOrderController=require('./updateOrder.controller')


module.exports=dependencies=>{
    return {
        addOrderController,
        getOrderByIdController,
        deleteOrderController,
        updateOrderController,
    }
}