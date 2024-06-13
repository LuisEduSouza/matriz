/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Nome:Luís Eduardo Novaes
*/

console.clear();
const teclado8 = require(`Prompt-sync`)();
let matriz8: number [][] = [];

let linha8 = 4;
let coluna8 = 4;
let linha = 0;
let coluna = 0;

for (let z = 0; z < linha8; z++) {

    matriz8[z] = [];

    for (let x = 0; x < coluna8; x++) {
        let numero8: number = Math.floor(Math.random() * 21);
        matriz8[z][x] = numero8 ;
    }
}
console.log(matriz8);

let maior: number = 0;

for (let z = 0; z < linha8; z++){

    for (let x = 0; x < coluna8; x++) {

        if(matriz8[z][x] > maior){
            maior = matriz8[z][x];
            linha = z;
            coluna = x;
        }        
    }
}

console.log(`O maior número é ${maior}`);
console.log(`Ele está localizado na linha ${linha} na coluna ${coluna}`);