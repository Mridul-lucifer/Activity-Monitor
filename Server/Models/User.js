const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Email:  {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Calories: {
        type: Number,
        default:0
    },
    Weight: {
        type: Number,
        required: true
    },
})
module.exports = mongoose.model('UserDetails', userSchema);