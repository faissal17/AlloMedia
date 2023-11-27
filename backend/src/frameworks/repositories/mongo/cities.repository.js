const mongoose=require('mongoose')
const entityName="City"


const {
    schemas:{
        city:citySchema
    }
}=require('../../database/mongo')

const repository=()=>{
    //schema
    const City=mongoose.model(entityName,citySchema)
    return {
        add:async city=>{
            const mongoObject=new City(city)
            return mongoObject.save()
        },
        update:async city=>{
            const { id , updates }=city
            delete city.id 
            return City.findByIdAndUpdate(id,{
                ...updates,
                updatedAt:new Date()
            },{
                new:true 
            })
        },
        delete:async city=>{
            console.log('fuck aress you')
            const { id }=city
            console.log('repository :',id)
            delete city.id 
            return City.findByIdAndUpdate(id,{
                deletedAt:new Date()
            },{
                new:true 
            })
        },
        getById:async id=>{
            const city=await City.findOne({
                _id:id,
                // deletedAt:{
                //     $exists:false
                // }
            })
            if (!city) {
                throw new Error(`Brand with ID ${id} does not exist or has been deleted.`);
            }
            return city;
        },
        getAll: async () => {
            const cities = await City.find();
            if (!cities) {
              throw new Error(`cities does not exist or has been deleted.`);
            }
            return cities;
        },
    }
}

module.exports=repository()