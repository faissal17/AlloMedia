const mongoose=require('mongoose')
const redis = require('redis');
const { createClient} =require('redis')
const entityName="Items"
const redisClient = redis.createClient({
    legacyMode: true,
    PORT: 6379
  })
  redisClient.connect().catch(console.error)

const {
    schemas:{
        item:itemSchema
    }
}=require('../../database/mongo')

const repository=()=>{
    //schema
    const Item=mongoose.model(entityName,itemSchema)
    
    return {
        add:async item=>{
            console.log('fucking realy items shittt')
            console.log(item)
            const mongoObject=new Item(item)
            return mongoObject.save()
        },
        update:async item=>{
            const { id , updates }=item
            console.log('repository')
            console.log(item)
            delete item.id 
            return Item.findByIdAndUpdate(id,{
                ...updates,
                updatedAt:new Date()
            },{
                new:true 
            })
        },
        delete:async item=>{
            const { id }=item
            console.log('repository :',id)
            delete item.id 
            return Item.findByIdAndUpdate(id,{
                deletedAt:new Date()
            },{
                new:true 
            })
        },
        getById:async id=>{
            const item=await Item.findOne({
                _id:id,
                deletedAt:{
                    $exists:false
                }
            })
            if (!item) {
                throw new Error(`Brand with ID ${id} does not exist or has been deleted.`);
            }
            return item;
        },
        getAll: async () => {
            const items = await Item.find();
            redisClient.setex('items', 600, JSON.stringify(items));
            if (!items) {
            throw new Error(`categories does not exist or has been deleted.`);
            }
            return items;
                    
        },
    }
}

module.exports=repository()