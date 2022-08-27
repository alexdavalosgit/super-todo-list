require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos')

// express 
const app = express();

// middleware - logs incoming requests
// gives access to req.body 
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes - uses created router for this /apis/todos path
app.use('/api/todos', todosRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        });

    })
    .catch(error => {
        console.log(error);
    })


