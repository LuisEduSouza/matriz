/*
Fazer um programa que lê 10 valores, armazene em um array, e imprime o maior 
e o menor valores lidos.
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado11 = require(`prompt-sync`)();

let numeros: number [] = new Array(9);
let maior: number = 0;

for( let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado11(`Digite um número para amarzenar ${x}: `));
    
}
let menor: number = numeros[0];

for(let y = 0; y <= 9; y++){
    if(numeros[y] > maior){
        maior = numeros[y];
    }
    if(numeros[y] < menor){
        menor = numeros[y]
    }
}
console.log(`O maior número é  ${maior} e o menor é ${menor}`);