const mongoose = require("mongoose");
const validator = require("validator");

const deliveryOrderSchema = new mongoose.Schema(
  {
    
    status:{
        type:String,
        enum:['PENDING','TAKE','DONE'],
        default:'PENDING',
    },
    status_deleted: {
      type: Number,
      required: [true, "category  of product status is required"],
      default: 0,
      Comment: "1 for activen deleted and 0 for inactive",
      enum: [0, 1],
      validator: function (value) {
        return validator.isIn(value, [0, 1]);
      },
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      default: null,
    },
    order:{
            type: mongoose.Schema.ObjectId,
            ref: "Order",
            default: null,
        },
  },
  { timestamps: true }
);

module.exports = deliveryOrderSchema;
