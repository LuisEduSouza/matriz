/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
const teclado7 = require(`Prompt-sync`)();
let matriz7: number [][] = [];

let linha7: number = 3;
let coluna7: number= 3;

for (let z = 0; z < linha7; z++) {
    matriz7[z] = [];

    for (let x = 0; x < coluna7; x++) {
        let numero7: number = Math.floor(Math.random() * 10);
        matriz7[z][x] = numero7 ;
    }
}
console.log(matriz7);