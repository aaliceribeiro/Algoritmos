var prompt = require('prompt-sync')()

let n1 = Number (prompt('Digite a nota da primeira avaliação do aluno: '))
let n2 = Number (prompt('Digite a nota da segunda avaliação do aluno: '))
let n3 = Number (prompt('Digite a nota da terceira avaliação do aluno: '))

let media = (n1 + n2 + n3)  / 3 
console.log (`Sua media é: ${media.toFixed(1)}`)
let resultado

if (media >= 85) {
    resultado = 5
}
else if (media >= 70 ){
    resultado =  3
}
else {
    resultado = 0
}

let mediafinal = media + resultado

console.log (`Sua nota final é: ${mediafinal.toFixed(1)}`)

if(mediafinal <= 70){
    console.log (`Voce foi REPROVADO`)
}
else {
    console.log (`Voce foi APROVADO!`)
}