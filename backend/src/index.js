const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket'); 

const app = express();
const server = http.Server(app);

setupWebSocket(server);
  
//Conecta no Banco
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7a6hi.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Configura o uso de qualquer endereço poder utilizar a API
app.use(cors());
//Configura as saidas para JSON
app.use(express.json());
//Permite o uso de Rotas
app.use(routes);

//Configura a porta padrão do servidor
server.listen(3333);