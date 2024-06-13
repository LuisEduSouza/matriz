/*
Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado10 = require("prompt-sync")();
var arrayMedia = [];
var media = 0;
for (var x = 1; x <= 10; x++) {
    arrayMedia[x] = parseInt(teclado10("Digite um n\u00FAmero inteiro ".concat(x, ": ")));
    media += arrayMedia[x];
}
media = media / 10;
console.log("A m\u00E9dia dos n\u00FAmeros \u00E9 ".concat(media));
var statusFalso = true;
for (var x = 1; x <= 10; x++) {
    if (arrayMedia[x] == media) {
        console.log("O n\u00FAmero ".concat(media, " \u00E9 igual a m\u00E9dia"));
        statusFalso = false;
    }
}
if (statusFalso) {
    console.log("Nenhum n\u00FAmero \u00E9 igual a m\u00E9dia!!");
}
