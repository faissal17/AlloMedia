const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  // Other tag-related fields
    code:{
        type: String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    //expired after 5 minutes
    expireAt: { 
    type: Date,// type is Date 
    default: Date.now, // default value is current time
    expires: 900 // expires after 5 minutes
    }
},{timestamps:true});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;