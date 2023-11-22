const {orderRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!orderRepository){
        throw new Error('productsRepository should be in dependencies')
    }

    const execute=(id)=>{
        return orderRepository.delete(id)
    }

    return {
        execute
    }
}