"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRandomNumber = exports.random = exports.seed = void 0;
//Definindo as variáveis que serão utilizadas
let _seed;
let validator = true;
let payload = {};
let numbers = [
    "0.3156106622882362",
    "0.5513213466665547",
    "0.3301843000590452",
    "0.04769233684601204",
    "0.4450511749319048",
    "0.8014283726497524",
    "0.6599671903586568",
    "0.39207733233979525",
    "0.9243979984480575",
];
//Atribuindo à variável _seed, já definida, um valor que foi passado como atributo da função
function seed(seed) {
    _seed = seed;
}
exports.seed = seed;
function random() {
    //Determinando o seno da seed passada pelo usuário e a multiplicando por 10000
    const x = Math.sin(_seed++) * 10000;
    //Subtraindo do valor de X a sua parte inteira, deixando apenas as casas depois da vírgula, e retornando ao usuário
    return x - Math.floor(x);
}
exports.random = random;
function checkRandomNumber(array) {
    array.forEach((element) => {
        //Iterando cada valor do array enviado como atributo da função
        numbers.includes(element.toString()) //Verificando se determinado elemento do array está em numbers
            ? console.log("equals") //Se o elemento estiver em Numbers ele imprime "equals" no console
            : (validator = false); //Se o elemento não estiver em Numbers ele define a variável validator como falsa
    });
    validator //Verificando o valor de validator
        ? (payload = JSON.parse('{ "status": "success"}')) //Se for verdadeira a variável payload recebe um objeto com a propriedade "status" definida como "success"
        : (payload = JSON.parse('{ "status": "error"}')); //Se for falsa a variável payload recebe um objeto com a propriedade "status" definida como "error"
    return payload; //Retorna o valor de payload
}
exports.checkRandomNumber = checkRandomNumber;
