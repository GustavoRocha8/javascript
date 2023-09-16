const prompt = require('prompt-sync')();

var a1 = prompt("Digite um número: 5");
var a2 = prompt("Digite um número: 6");

Number.parseFloat(a1)
Number.parseFloat(a2)

console.log(`A soma é: ${a1 + a2}`)
console.log(`A subtralção é: ${a1 - a2}`)


