/*
Questão 1174 - Seleção em Vetor I

link: https://judge.beecrowd.com/pt/runs/code/41347024
*/

let A = [];

for (let i = 0; i < 100; i++) {
    A[i] = parseFloat(lines.shift());
    
    if (A[i] <= 10) {
        console.log("A[" + [i] + "] = " + A[i].toFixed(1))
    }
}