const mongoose=require('mongoose')
const entityName="Image"


const {
    schemas:{
        image:imageSchema
    }
}=require('../../database/mongo')

const repository=()=>{
    //schema
    const Image=mongoose.model(entityName,imageSchema)
    return {
        add:async image=>{
            
        },
        update:async image=>{
            
        },
        delete:async image=>{
            
        },
        getById:async id=>{
            
        }
    }
}

module.exports=repository()