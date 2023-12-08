const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  // Other tag-related fields
  
    name: {
        type: String,
        required: [true, "cities name is required"],
        unique: [true, "cities name must be unique"],
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        },
    },
    slug: {
        type: String,
        required: [true, "city slug is required"],
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        }
    },
    status: {
        type: Number,
        required: [true, "city status is required"],
        default: 1,
        Comment: "1 for active and 0 for inactive",
        enum: [0, 1],
        validator: function(value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isIn(value, [0,1]);
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null,
    },
    user_updated: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null 
    },
    user_deleted: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null
    },
    deletedAt: {
        type: Date,
        default: null,
    },
},{timestamps:true});


module.exports = citySchema;