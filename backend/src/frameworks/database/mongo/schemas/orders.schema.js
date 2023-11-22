const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Other tag-related fields
  user:{
    type:String,
    ref:'User',
    default:null
  },
  subTotal:{
    type:Number,
    default:null
  },
  discount:{
    type:Number,
    default:0
  },
  tax:{
    type:Number,
    default:0
  },
  total:{
    type:Number,
    default:0
  },
  firstName:{
    type:String,
    default:null,
  },
  lastName:{
    type:String,
    default:null
  },
  email:{
    type:String,
    default:null
  },
  phone:{
    type:String,
    default:null
  },
  lineOne:{
    type:String,
    default:null
  },
  lineTwo:{
    type:String,
    default:null
  },
  city:{
    type:String,
    default:null
  },
  zipCode:{
    type:String,
    default:null
  },
  status:{
    type:String,
    enum:['MANAGER','USER','LIVREUR','ADMIN']
  },
  deletedAt:{
    type:Date,
    default:null
  }
});

module.exports = orderSchema;