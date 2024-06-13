/*4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado4 = require("Prompt-sync")();
var matriz4 = new Array(3);
for (var i = 0; i < 4; i++) {
    matriz4[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var numero4 = teclado4("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        matriz4[i][j] = numero4;
    }
}
console.log(matriz4);
