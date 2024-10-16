/*
Questão 1012 - Área

link:  https://judge.beecrowd.com/pt/runs/code/41347040
*/


var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(" ").map(item => parseFloat(item))
let pi = 3.14159

let trianguloRetangulo = (A * C) / 2
let circulo = pi * Math.pow(C, 2)
let trapezio = ((A + B) * C) / 2
let quadrado = B * B
let retangulo = A * B

console.log("TRIANGULO: " + trianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));  