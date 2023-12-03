const {orderRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
   
    if(!orderRepository){
        throw new Error('productsRepository should be in dependencies')
    }


    const execute=({
        order
    })=>{
        console.log('useCases')
        console.log(order)
        return orderRepository.updateDeliveryOrder(order)
    }

    return {
        execute
    }
}