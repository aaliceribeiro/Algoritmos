var prompt = require('prompt-sync')()

let senha =  (prompt('Digite a senha: '))

const comprimentoMinimo = 8 
const maiuscula = /[ A-Z]/
const minuscula = /[a-z]/
const numero = /[0-9]/
const especial = /[@#$*&!]/

if (senha.length < comprimentoMinimo){
    console.log (`A senha deve conter 8 caractere. `)

}else if (!maiuscula.test(senha)){
    console.log (`A senha deve conter uma letra maiscula.`)

}else if (!minuscula.test(senha)){
    console.log (`A senha deve conter uma letra minuscula. `)

}else if (!numero.test(senha)){
    console.log (`A senha deve conter um numero. `)

}else if (!especial.test(senha)){
    console.log (`A senha deve conter um caracter especial. `)
}
else {
    console.log ('senha forte')
}