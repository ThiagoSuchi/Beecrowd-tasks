/*
Questão 1017 - Gasto de combustível

link: https://judge.beecrowd.com/pt/runs?problem_id=1015&answer_id=1
*/ 


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let tempoGasto = parseInt(lines.shift())
let velocidadeMadia = parseInt(lines.shift())
let kml = 12

let distanciaPecorrida = tempoGasto * velocidadeMadia;

let litro = distanciaPecorrida / kml

console.log(`${litro.toFixed(3)}`)