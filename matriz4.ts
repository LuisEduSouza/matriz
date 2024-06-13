/*4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado4 = require(`Prompt-sync`)();
let matriz4: number[][] = new Array (3);


for (let i = 0; i < 4; i++) {
    matriz4[i] = new Array(3);

    for (let j = 0; j < 4; j++) {
        let numero4: number = teclado4(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);
        matriz4[i][j] = numero4;
    }
}
console.log(matriz4);
