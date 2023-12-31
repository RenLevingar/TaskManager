const mongoose = require('mongoose');

const taskScheme = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Must provide a name'],
        trim: true,
        maxLength:[20, "The name can't exceed 20 characters"]
    },
    desc:{
        type:String,
        trim:true,
        maxLength:[50, "The description can't exceed 20 characters"]
    },
    id:{
        type:String,
        trim: true,
        
    },
    completed:{
        type:Boolean,
        default: false,
    },
},{collection:"Tasks"})

module.exports = mongoose.model('Tasks', taskScheme)