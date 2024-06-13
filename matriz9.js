/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado9 = require("prompt-sync")();
var matrizNove = [];
var linha9 = 6;
var coluna9 = 6;
var result = 0;
for (var x = 0; x < linha9; x++) {
    matrizNove[x] = [];
    for (var z = 0; z < coluna9; z++) {
        var numero9 = parseFloat(teclado9("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(x, ", ").concat(z, "] da matriz: ")));
        matrizNove[x][z] = numero9;
        if (z == 0 || z == 2 || z == 4) {
            result += matrizNove[x][z];
        }
        4;
    }
}
console.log(result);
console.log(matrizNove);
