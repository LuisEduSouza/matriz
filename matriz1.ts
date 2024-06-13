console.clear();
const teclado = require(`Prompt-sync`)();
let minhaMatriz: string [][] = [];

let linha = 2;
let coluna = 4;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `);
        
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);