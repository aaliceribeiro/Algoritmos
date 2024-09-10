var prompt = require('prompt-sync')()

let n1 = Number (prompt('Digite o peso: '))
let n2 = Number (prompt('Digite a altura: '))

let IMC = n1 / (n2 * n2)
let resultado

if (IMC < 18.5){
    resultado = "Você está a baixo do peso."
}
else if (IMC > 18.5 && IMC < 25){
    resultado= "Você está com o peso normal."
}
else if(IMC >= 25 && IMC < 30){
    resultado = "você está com sobrepeso."
}
else if (IMC >= 30 && IMC < 35){
     resultado = "Você está com obsidade grau I."
}
else if (IMC >= 35 && IMC < 40){
     resultado = "Você está com obsidade grau II."
}
     else {
     resultado = "Você está com obsidade grau III."
     }

     console.log (`Seu IMC é ${IMC.toFixed(1)} ${resultado}`)
