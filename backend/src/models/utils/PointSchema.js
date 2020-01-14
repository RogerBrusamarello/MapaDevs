const mongoose = require('mongoose');
//Esquema para a utilização do ponto de Localização
// Definindo ponto e Coordenadas [Latitude e longitude]
const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
});

module.expors = PointSchema;