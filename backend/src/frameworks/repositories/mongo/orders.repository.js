const mongoose=require('mongoose')
const entityName="Order"
const entityName2="OrderDetails"


const {
    schemas:{
        order:orderSchema,
        orderDetails:orderDetailsSchema
    }
}=require('../../database/mongo')

const repository=()=>{
    //schema
    const Order=mongoose.model(entityName,orderSchema)
    const OrderDetails=mongoose.model(entityName2,orderDetailsSchema)
    return {
        add:async order=>{
            // console.log('fucking realy orders shittt')
            // console.log(order.orderDetails)
            const orderSchema={
                firstName:order.firstName,
                lastName:order.lastName,
                email:order.email,
                phone:order.phone,
                lineOne:order.lineOne,
                lineTwo:order.lineTwo,
                zipCode:order.zipCode
            }
            const mongoObject=new Order(orderSchema)
            await mongoObject.save()
            //console.log("result of order")
            //console.log(mongoObject)

            const orderSchemaDetails={
                order:mongoObject._id,
                items:[]
            }
            for (let i = 0; i < order.orderDetails.length; i++) {
                console.log('order details', order.orderDetails);
                orderSchemaDetails.items[i] = {
                    id: order.orderDetails[i].id,
                    total:order.orderDetails[i].price,
                    quantity:order.orderDetails[i].quantity
                };
            }
            // console.log('result of order details')
            // console.log(orderSchemaDetails.items)
            
            for(let i=0;i<orderSchemaDetails.items.length;i++){
                // console.log()
                const mingosDetailsObj=new OrderDetails({
                    order:orderSchemaDetails.order,
                    item:orderSchemaDetails.items[i].id,
                    quantity:orderSchemaDetails.items[i].quantity
                })
                await mingosDetailsObj.save()
            }
            
            return mongoObject.save()
        },
        update:async order=>{
            const { id , updates }=order
            // console.log('repository')
            // console.log(order)
            return Order.findByIdAndUpdate(id,{
                ...updates,
                updatedAt:new Date()
            },{
                new:true 
            })
        },
        delete:async id=>{
            // console.log('repository :',id)
            return Order.findByIdAndUpdate(id,{
                deletedAt:new Date()
            },{
                new:true 
            })
        },
        getById:async id=>{
            // console.log('fuck order')
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