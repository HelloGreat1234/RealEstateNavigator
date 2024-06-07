const mongoose = require('mongoose')

const Property = mongoose.Schema({
    location : {
        type : String,
        required : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    parcelSize : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    photo : {
        type : String
    }
})


module.exports = mongoose.model('Property',Property)