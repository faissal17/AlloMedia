const mongoose = require('mongoose');
const validator = require("validator");

const brandSchema = new mongoose.Schema({
    // Other tag-related fields
    name: {
        type: String,
        required: [true, "brand  of product name is required"],
        unique: [true, "brand  of product name must be unique"],
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        },
    },
    slug: {
        type: String,
        required: [true, "brand  of product slug is required"],
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        }
    },
    picture: {
        type: String,
        required: [true, "brand  of product picture is required"],
        trim: true,
        validator: (value) => {
            return validator.isURL(value.replace(/\s/g, ""));
        },
        default: "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
    },
    status: {
        type: Number,
        required: [true, "brand  of product status is required"],
        default: 1,
        Comment: "1 for active and 0 for inactive",
        enum: [0, 1],
        validator: function (value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isIn(value, [0, 1]);
        }
    },
    status_deleted: {
        type: Number,
        required: [true, "brand  of product status is required"],
        default: 0,
        Comment: "1 for activen deleted and 0 for inactive",
        enum: [0, 1],
        validator: function (value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isIn(value, [0, 1]);
        }
    },
    restaurants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: null,
    },
    user_updated: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: null
    },
    user_deleted: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: null
    },
    updatedAt: {
        type: Date,
        default: null,
    },
    deletedAt: {
        type: Date,
        default: null,
    },

}, { timestamps: true });



module.exports = brandSchema;