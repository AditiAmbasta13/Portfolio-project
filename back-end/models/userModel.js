const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    pno: {
        type: Number,
    },
    msg: {
        type: String,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema) 

module.exports = User;