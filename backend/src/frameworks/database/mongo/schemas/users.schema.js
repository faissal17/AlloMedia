const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  // Other tag-related fields
    first_name:{
        type:String,
        required:[true,'first name is required'],
        min:6,max:255,
        lowercase:true,
        validator: (value) => {
            // remove all spaces from string value
            return validator.isAlpha(value.replace(/\s/g, ''));
        },
        trim:true,
        default:null
    },
    last_name:{
        type:String,
        required:[true,'last name is required'],
        min:6,
        max:255,
        lowercase:true,
        validator: (value) => {
            // remove all spaces from string value
            return validator.isAlpha(value.replace(/\s/g, ''));
        },
        default:null
    },
    username:{
        type:String,
        required:[true,'first name is required'],
        trim:true,
        min:6,
        max:255,
        lowercase:true,
        validator: (value) => {
             // remove all spaces from string value
            return validator.isAlphanumeric(value.replace(/\s/g, ''));
        },
        text:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        trim:true,
        lowercase: true,
        unique:true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    mobile:{
        type:String,
        required:true,
        min:10,
        max:10
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [128, 'Password must be less than 128 characters long'],
        validate: {
            validator: function(value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/;
            return regex.test(value);
            },
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one special character and one number'
        },
    },
    loginCount: {
        type: Number,
        default: 0
   },
    picture:{
        type:String,
        default:'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
        trim:true 
    },
    role:[
        {
            type:String,
            ref:'Role',
            required:true,
            //default is _id of role
            default:"6530e3c6b66fead76cb05923"
        }
    ],
    isBlocked: {type: Boolean,default: false,},
    verified:{type:Boolean,default:false },
    search:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Search',
            default:null
        },
    ],
    address:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Address',
            default:null
    }],
    wishlist:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}],
    refreshToken: {
        type: String,
        default: ""
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
},{timestamps:true});

userSchema.methods.incrementLoginCount = function() {
    this.loginCount += 1;
    return this.save();
};

// Generate a JWT token
// userSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({ _id: this._id },env.SECRET_KEY_TOKEN, { expiresIn: '1d' });
//     return token;
// };
// userSchema.statics.findByToken = function (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       return this.findOne({ _id: decoded._id });
//     } catch (err) {
//       throw new Error(`Error verifying token: ${err.message}`);
//     }
// };


module.exports = userSchema;