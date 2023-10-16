const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            required:true,
        },
        phonenumber: {
            type: Number,
            required:true
        },
        address: {
            type: String, 
            required:true,
        },
        photo: {
            type: String,
            required:false,
        },
        createdAT: {
            type: Date,
            required: false,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model('user', userschema);    