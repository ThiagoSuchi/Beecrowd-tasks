/* 
Questão 1035 - Teste de seleção

link: https://judge.beecrowd.com/pt/runs?problem_id=1035&answer_id=1
*/


var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C, D] = input.split(" ").map(item => parseInt(item))

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}