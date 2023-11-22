const mongoose=require('mongoose')
const entityName="Order"


const {
    schemas:{
        order:orderSchema
    }
}=require('../../database/mongo')

const repository=()=>{
    //schema
    const Order=mongoose.model(entityName,orderSchema)
    return {
        add:async order=>{
            console.log('fucking realy orders shittt')
            console.log(order)
            const mongoObject=new Order(order)
            return mongoObject.save()
        },
        update:async order=>{
            const { id , updates }=order
            console.log('repository')
            console.log(order)
            return Order.findByIdAndUpdate(id,{
                ...updates,
                updatedAt:new Date()
            },{
                new:true 
            })
        },
        delete:async id=>{
            console.log('repository :',id)
            return Order.findByIdAndUpdate(id,{
                deletedAt:new Date()
            },{
                new:true 
            })
        },
        getById:async id=>{
            console.log('fuck order')
            const order=await Order.findOne({
                _id:id,
            })
            if (!order) {
                throw new Error(`Brand with ID ${id} does not exist or has been deleted.`);
            }
            return order;
        }
    }
}

module.exports=repository()