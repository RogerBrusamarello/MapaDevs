const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');

const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
       const {latitude, longitude, techs} = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(latitude),
            },
            techs: parseStringAsArray(techs);
        });         
    });
}