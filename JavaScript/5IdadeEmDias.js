/*
Questão 1020- Idade em dias

link: https://judge.beecrowd.com/pt/runs?problem_id=1020&answer_id=1
*/


let totalDias = parseInt(lines.shift())

let qtdAnos = totalDias / 365
totalDias = totalDias % 365

let qtdMeses = totalDias / 30
totalDias = totalDias % 30

let qtdDias = totalDias

console.log(`${Math.floor(qtdAnos)} ano(s)`)
console.log(`${Math.floor(qtdMeses)} mes(es)`)
console.log(`${Math.floor(qtdDias)} dia(s)`)