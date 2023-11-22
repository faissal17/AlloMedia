const {orderRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
    if(!orderRepository){
        throw new Error('productsssRepository should be in dependencies')
    }

    const execute=(id)=>{
        console.log('fuck usecase',id)
        return orderRepository.getById(id)
    }

    return {
        execute
    }
}