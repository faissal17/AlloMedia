const mongoose = require('mongoose');
const validator = require("validator");

const imageSchema = new mongoose.Schema({
  // Other tag-related fields
    picture: {
        type: String,
        required: [true, "brand  of product picture is required"],
        trim: true,
        validator: (value) => {
            return validator.isURL(value.replace(/\s/g, ""));
        },
        default:"https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
    },
    
    
    
   
    },{timestamps:true});



module.exports = imageSchema;