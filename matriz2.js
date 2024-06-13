console.clear();
var teclado2 = require("Prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var nome = teclado2("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        matrizDois[i][j] = nome;
    }
}
console.log(matrizDois);
