/* 
Questão 1013 - o Maior

Link: https://judge.beecrowd.com/pt/runs?problem_id=1013&answer_id=1
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let numeros = lines[0].split(' ');

let a = parseInt(numeros[0]);
let b = parseInt(numeros[1]);
let c = parseInt(numeros[2]);


let maior;
if (a >= b && a >= c) {
    maior = a;
} else if (b >= a && b >= c) {
    maior = b;
} else {
    maior = c;
}

console.log(maior + " eh o maior");
