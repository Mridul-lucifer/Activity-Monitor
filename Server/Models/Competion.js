const mongoose = require('mongoose');

const compSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    passcode:  {
        type: Number,
        required: true,
        // unique: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required:false
    },
    array: [{
        Solver : String
    }]
})
module.exports = mongoose.model('CompDetails', compSchema);