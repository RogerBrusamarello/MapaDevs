const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7a6hi.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ "message": "hello" });
});

app.listen(3333);