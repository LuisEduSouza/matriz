/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. 
Nome: Luís Eduardo Novaes Souza
*/

console.clear();

const teclado = require(`prompt-sync`)();
let arrayNota: number[] = [];
let resultado: number = 0;

for( let x = 1; x <= 5; x++){
    arrayNota[x] = parseInt(teclado(`Digite a nota do aluno ${x}: `));
    resultado += arrayNota[x]
}
resultado = resultado / 5;
console.log(`A nota final do aluno é ${resultado}`);