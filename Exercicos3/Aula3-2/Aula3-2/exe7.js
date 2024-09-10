var prompt = require('prompt-sync')()

let senha =  (prompt('Digite a senha: '))


let contemMaiuscula = senha.toLowerCase() !== senha;
let contemMinuscula = senha.toUpperCase() !== senha;
let contemLetra = senha.includes ('#')
let tamanhosenha = senha.length
console.log('')
console.log('Maiuscula', contemMaiuscula)
console.log(nome.toLowerCase())
console.log('')
console.log('Minuscula', contemMinuscula())
console.log(senha.toUpperCase) 

