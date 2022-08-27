const express = require('express')
const {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
} = require('../controllers/todoController');

// create a router
const router = express.Router();

// Get all todos
router.get('/', getTodos)


// Get single todo
router.get('/:id', getTodo);

// Post new todo
router.post('/', createTodo);


// Delete single todo
router.delete('/:id', deleteTodo);

// Update single todo
router.patch('/:id', updateTodo); 


// Export router
module.exports = router;