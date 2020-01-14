
//Converte uma String de em array separando por virgula e tirando os espaços
module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(techs => techs.trim());
}