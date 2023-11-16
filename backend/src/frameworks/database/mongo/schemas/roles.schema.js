const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  // Other tag-related fields
    role:{
        type:String,
        required:[true,'role is required'],
        trim:true,
        uppercase:true,
        unique:true,
        //validation enum ADMIN or USER or EMPLOYEE
        enum:['MANAGER','USER','LIVREUR','ADMIN']
    },
    isBlocked: {type: Boolean,default: false,},
    user:[
        {
            type:mongoose.Schema.Types.ObjectId || null,
            ref:'User',
            required:true,
            default:null
        }
    ],
},{timestamps:true});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;