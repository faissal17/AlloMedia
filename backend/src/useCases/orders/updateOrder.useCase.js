const {ordersRepository} =require('../../frameworks/repositories/mongo')
module.exports=()=>{
   
    if(!ordersRepository){
        throw new Error('productsRepository should be in dependencies')
    }

    const execute=({
        order
    })=>{
        return ordersRepository.update(order)
    }

    return {
        execute
    }
}