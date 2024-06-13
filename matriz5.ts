/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome: Luís Eudardo Novae Souza
*/
console.clear();
const teclado5= require(`Prompt-sync`)();
let matriz5: number [][] = [];

let linha5 = 3;
let coluna5 = 3;

for (let z = 0; z < linha5; z++) {
    matriz5[z] = [];

    for (let x = 0; x < coluna5; x++) {
        let numero5: number = teclado5(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `);
        
        matriz5[z][x] = numero5;
    }
}
console.log(matriz5);