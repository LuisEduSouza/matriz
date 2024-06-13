/*
Fazer um programa que lê 10 valores, armazene em um array, e imprime o maior
e o menor valores lidos.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado11 = require("prompt-sync")();
var numeros = new Array(9);
var maior = 0;
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado11("Digite um n\u00FAmero para amarzenar ".concat(x, ": ")));
}
var menor = numeros[0];
for (var y = 0; y <= 9; y++) {
    if (numeros[y] > maior) {
        maior = numeros[y];
    }
    if (numeros[y] < menor) {
        menor = numeros[y];
    }
}
console.log("O maior n\u00FAmero \u00E9  ".concat(maior, " e o menor \u00E9 ").concat(menor));
