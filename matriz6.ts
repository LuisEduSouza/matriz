/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado6= require(`Prompt-sync`)();
let matriz6: number [][] = [];

let linha6: number = 3; 
let coluna6: number = 3;

for (let z = 0; z < linha6; z++) {
    matriz6[z] = [];
    for(let x = 0; x < coluna6; x++){
        let numero6: number = parseFloat(teclado6(`Digite um número de 0 a 9 que vai estar no endereço [${z}, ${x}] da matriz: `));
        if(numero6 > 9 || numero6 < 0){
            console.log(`O número digitado não é de 0 a 9!!`);
            console.log(`Tente outro`);
            x--;
        }
        else{
            matriz6[z][x] = numero6;
        }
    }
}
console.log(matriz6);