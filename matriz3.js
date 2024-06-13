/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado3 = require("Prompt-sync")();
var minhaMatriz3 = [];
var linha3 = 2;
var coluna3 = 2;
for (var z = 0; z < linha3; z++) {
    minhaMatriz3[z] = [];
    for (var x = 0; x < coluna3; x++) {
        var numero = parseFloat(teclado3("Digite o nome que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        minhaMatriz3[z][x] = numero;
    }
}
console.log(minhaMatriz3);
