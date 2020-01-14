const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conecta no Banco
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7a6hi.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Configura as saidas para JSON
app.use(express.json());
//Permite o uso de Rotas
app.use(routes);

//Configura a porta padrão do servidor
app.listen(3333);