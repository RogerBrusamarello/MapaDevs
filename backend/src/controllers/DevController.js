const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
  //Busca todos devs no banco
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },


  //Salva o Dev no banco
  async store(request, response) {
    //Pega da requisição os atributos
    const { github_username, techs, latitude, longitude } = request.body;

    //Verifica se o dev ja ta cadastrado
    let dev = await Dev.findOne({ github_username });

    //Caso não esteja ele cadastra o dev
    if (!dev) {
      //Busca pelo nome na api do GitHub
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url, bio } = apiResponse.data;
      const techsArray = parseStringAsArray(techs);

      //Localização
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      //Criação do dev
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};