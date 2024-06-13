/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado7 = require("Prompt-sync")();
var matriz7 = [];
var linha7 = 3;
var coluna7 = 3;
for (var z = 0; z < linha7; z++) {
    matriz7[z] = [];
    for (var x = 0; x < coluna7; x++) {
        var numero7 = Math.floor(Math.random() * 10);
        matriz7[z][x] = numero7;
    }
}
console.log(matriz7);
