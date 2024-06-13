/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();

const teclado9 = require(`prompt-sync`)();
let matrizNove: number[][] = [];

let linha9 = 6;
let coluna9 = 6;
let result = 0;

for (let x = 0; x < linha9; x++) {
    matrizNove[x] = [];

    for (let z = 0; z < coluna9; z++) {
        let numero9: number = parseFloat(teclado9(`Digite o número que vai estar no endereço [${x}, ${z}] da matriz: `));
        
        matrizNove[x][z] = numero9;
        if( z == 0 || z == 2 || z == 4){
            result += matrizNove[x][z]
        }
    }
}

console.log(result)
console.log(matrizNove)