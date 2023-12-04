const mongoose=require('mongoose')
const redis = require('redis');
const { createClient} =require('redis')
const entityName="Item"
// const redisClient = redis.createClient({
//     legacyMode: true,
//     PORT: 6379
//   })
//   redisClient.connect().catch(console.error)

const {
    schemas:{
        item:itemSchema
    }
}=require('../../database/mongo') 
let globalItems=[]
const repository=()=>{
    //schema
    const Item=mongoose.model(entityName,itemSchema)
    
    return {
        add:async item=>{
            console.log('I am here')
            const mongoObject = new Item(item);
            let itemss=await mongoObject.save();
            const itemAll = await Item.find()
            .populate('user','first_name last_name username email mobile picture role')
            .populate('brand','name picture')
            .populate('category','name picture')
            .populate('menu','name')
            .populate('tags','name');
            globalItems=itemAll
            // Save to Redis
            // redisClient.get('items', (err, cachedItems) => {
            //     if (err) {
            //         console.error('Error getting items from Redis:', err);
            //         return;
            //     }
            //     let items = [];
            //     if (cachedItems) {
            //         // items = JSON.parse(cachedItems);
            //         // items.push(itemss);
            //         // globalItems=items
            //         redisClient.setEx('items', 3600, JSON.stringify(globalItems));
            //         console.log('cache exist')
            //         redisClient.setEx('items', 3600, JSON.stringify(globalItems));
            //     }else{
            //         redisClient.setEx('items', 3600, JSON.stringify(globalItems));
            //     }
                
            //     // Set the updated items array back to Redis
                
                
            // });
            return itemss
        },
        update:async item=>{
            const { id , updates }=item
            delete item.id 
            const updatedItem=await Item.findByIdAndUpdate(id,{
                ...updates,
                updatedAt:new Date()
            },{
                new:true 
            })
            // Update Redis cache
            const itemAll = await Item.find()
            .populate('user','first_name last_name username email mobile picture role')
            .populate('brand','name picture')
            .populate('category','name picture')
            .populate('menu','name')
            .populate('tags','name');
            // redisClient.get('items', (err, cachedItems) => {
            //     if (err) {
            //         console.error('Error getting items from Redis:', err);
            //         return;
            //     }
            //     let items = [];
            //     if (cachedItems) {
                    
            //         redisClient.setEx('items', 3600, JSON.stringify(itemAll));
            //         console.log('cache exist')
            //         redisClient.setEx('items', 3600, JSON.stringify(itemAll));
            //     }else{
            //         redisClient.setEx('items', 3600, JSON.stringify(itemAll));
            //     }
            // });
            return updatedItem
        },
        delete:async item=>{
            const { id }=item
            delete item.id 
            const deletedItem = await Item.findByIdAndDelete(id);
             // Update Redis cache
            // redisClient.get('items', (err, cachedItems) => {
            //     if (err) {
            //         console.error('Error getting items from Redis:', err);
            //         return;
            //     }
            //     let items = [];
            //     if (cachedItems) {
            //         items = JSON.parse(cachedItems);
            //         const index = items.findIndex(i => i._id === id);
            //         if (index !== -1) {
            //             items.splice(index, 1);
            //             redisClient.setEx('items', 3600, JSON.stringify(items));
            //         }
            //     }
            // });
            return deletedItem
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
            const items = await Item.find()
                .populate('user','first_name last_name username email mobile picture role')
                .populate('brand','name picture')
                .populate('category','name picture')
                .populate('menu','name')
                .populate('tags','name')
                ;
            //console.log(items)
            globalItems=items
            //console.log(globalItems)
            // redisClient.setEx('items', 3600, JSON.stringify(globalItems));
            if (!items) {
            throw new Error(`categories does not exist or has been deleted.`);
            }
            return items;
                    
        },
    }
}

module.exports=repository()