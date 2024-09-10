var prompt = require('prompt-sync')()

let n1 = Number (prompt('Digite o primeiro numero: '))
let n2 = Number (prompt('Digite o segundo numero: '))
let n3 = Number (prompt('Digite o terceiro numero: '))

if (n1 < n2 && n2 < n3) {
    console.log("Os numeros estão em ordem crescente.");
} 
else if (n1 > n2 && n2 > c) {
    console.log ("Os numeros estão em ordem decrescente.");
}
else { 
    console.log("Os numeros estão desordenados. ");
}


