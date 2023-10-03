const mongoose = require('mongoose');

const personScheme = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Must provide a name'],
        trim: true,
        maxLength:[20, "The name can't exceed 20 characters"]
    },
    age:{
        type: Number,
        trim: true,
        default: 5
    },
    id:{
        type: Number,
        trim: true,
    },
    check:{
        type:Boolean,
        default: false,
        trim: true
    },
},{collection:"People"})

module.exports = mongoose.model('People', personScheme)