const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
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