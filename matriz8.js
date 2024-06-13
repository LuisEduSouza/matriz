/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Nome:Luís Eduardo Novaes
*/
console.clear();
var teclado8 = require("Prompt-sync")();
var matriz8 = [];
var linha8 = 4;
var coluna8 = 4;
var linha = 0;
var coluna = 0;
for (var z = 0; z < linha8; z++) {
    matriz8[z] = [];
    for (var x = 0; x < coluna8; x++) {
        var numero8 = Math.floor(Math.random() * 21);
        matriz8[z][x] = numero8;
    }
}
console.log(matriz8);
var maior = 0;
for (var z = 0; z < linha8; z++) {
    for (var x = 0; x < coluna8; x++) {
        if (matriz8[z][x] > maior) {
            maior = matriz8[z][x];
            linha = z;
            coluna = x;
        }
    }
}
console.log("O maior n\u00FAmero \u00E9 ".concat(maior));
console.log("Ele est\u00E1 localizado na linha ".concat(linha, " na coluna ").concat(coluna));
