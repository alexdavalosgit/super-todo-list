const mongoose = require('mongoose');
const Todo = require('../models/todoModel');

// get all todos
const getTodos = async (req, res) => {
    const todos = await Todo.find({}).sort({createdAt: -1});
    res.status(200).json(todos);
}

// get single todo
const getTodo = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not valid todo task'});
    }

    const todo = await Todo.findById(id);

    if(!todo) {
        return res.status(404).json({error: 'Not valid todo task'});
    } else res.status(200).json(todo);
}


// create a new todo
const createTodo = async (req, res) => {
    const { title, priority, estimatedTime } = req.body;

     // Error Handling
     let emptyFields = [];

     if(!title) {
         emptyFields.push('title')
     }
     if(!priority) {
         emptyFields.push('priority')
     }
     if(!estimatedTime) {
         emptyFields.push('estimatedTime')
     }
     if(emptyFields.length > 0) {
         return res.status(400).json({error: 'Please fill out all fields', emptyFields})
     }

    // add document to db
    try {
        const todo = await Todo.create({ title, priority, estimatedTime });
        res.status(200).json(todo)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not valid todo task' });
    }
    const todo = await Todo.findOneAndDelete({_id: id});

    if(!todo) {
        return res.status(400).json({error: 'Not valid todo task'});
    } else res.status(200).json(todo);
}

// update a workout
const updateTodo = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not valid todo task'});
    }

    const todo = await Todo.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!todo) {
        return res.status(400).json({error: 'Not valid todo task'});
    } 
    
    res.status(200).json(todo);

}




module.exports = {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
}