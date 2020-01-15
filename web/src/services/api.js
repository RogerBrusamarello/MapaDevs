import axios from 'axios';

//Api com o url para pegar no backend as info
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;