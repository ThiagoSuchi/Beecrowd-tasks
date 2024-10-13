/*
Questão 1067 - Números Ímpares

link: https://judge.beecrowd.com/pt/runs/code/41346895
*/


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {

        console.log(i);

    }
}