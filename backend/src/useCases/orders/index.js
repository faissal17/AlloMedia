const addOrderUseCase=require('./addOrder.useCase')
const getOrderByIdUseCase=require('./getOrderById.useCase')
const updateOrderUseCase=require('./updateOrder.useCase')
const deleteOrderUseCase=require('./deleteOrder.useCase')
const getAllOrderUseCase=require('./getAllOrder.useCase')
const getAllOrderConfirmUseCase=require('./getAllOrderConfirm.useCase')
const getAllOrderTakeUseCase=require('./getAllOrderTake.useCase')
const updateOrderDeliveryUseCase=require('./updateOrderDelivery.useCase')

module.exports={
    addOrderUseCase,
    getOrderByIdUseCase,
    updateOrderUseCase,
    deleteOrderUseCase,
    getAllOrderUseCase,
    getAllOrderConfirmUseCase,
    updateOrderDeliveryUseCase,
    getAllOrderTakeUseCase
}