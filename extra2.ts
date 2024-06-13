/*
Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Luís Eduardo Novaes Souza
*/


console.clear();
const teclado10 = require(`prompt-sync`)();
let arrayMedia: number[] = [];
let media: number = 0;

for( let x = 1; x <= 10; x++){
    arrayMedia[x] = parseInt(teclado10(`Digite um número inteiro ${x}: `));
    media += arrayMedia[x];
}

media =  media / 10;
console.log(`A média dos números é ${media}`);

let statusFalso: boolean = true;

for( let x = 1; x <= 10; x++){
    if(arrayMedia[x] == media){
        console.log(`O número ${media} é igual a média`);
        statusFalso = false;
    }
}


if(statusFalso){
    console.log(`Nenhum número é igual a média!!`);
}

