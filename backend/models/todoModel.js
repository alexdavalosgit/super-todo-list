const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema defines the structure of data
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    estimatedTime: {
        type: Number,
        required: true
    }
}, {timestamps: true});

// Model is how we can interact with functinos
module.exports = mongoose.model('Todo', todoSchema); 

