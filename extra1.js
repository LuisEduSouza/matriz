/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var arrayNota = [];
var resultado = 0;
for (var x = 1; x <= 5; x++) {
    arrayNota[x] = parseInt(teclado("Digite a nota do aluno ".concat(x, ": ")));
    resultado += arrayNota[x];
}
resultado = resultado / 5;
console.log("A nota final do aluno \u00E9 ".concat(resultado));
