const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true ,
    default:null
  },
  phoneNumber:{
    type:String,
    required:true,
    default:null
  },
  city:{
    type:String,
    ref:"User",
    default:null
  },
  vycle:{
    type:String,
    enum:['MOTOR','bCYcle'],
    default:'MOTOR',
  },
  status:{
    type:String,
    enum:['CONFIRM','PENDING','CANCEL'],
    default:'PENDING'
  },
  // Other tag-related fields
  user: {
    type:String,
    ref: "User",
    default:null,
  },
  cartNational:{
    type:String,
    default:null
  },
  deleteAt:{
    type:Date,
    default:null
  }
});



module.exports = deliveryPersonSchema;