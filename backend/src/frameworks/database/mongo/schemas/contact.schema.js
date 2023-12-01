const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            validate: [validator.isEmail, "Invalid email address"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

// const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;
module.exports = contactSchema;
