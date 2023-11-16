const {Order} =require('../../entities')
const {ordersRepository} =require('../../frameworks/repositories/inMemory')
module.exports=()=>{
    if(!ordersRepository){
        throw new Error('productsRepository should be in dependencies')
    }

    const execute=({
        userId,
        productsIds,
        date,
        isPayed,
        meta
    })=>{
        const order=new Order({
            userId,
            productsIds,
            date,
            isPayed,
            meta
        })
        return ordersRepository.add(order)
    }

    return {
        execute
    }
}