const { orderRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!orderRepository){
        throw new Error('productsRepository should be in dependencies')
    }

    const execute=(order)=>{
        return orderRepository.add(order)
    }

    return {
        execute
    }
}