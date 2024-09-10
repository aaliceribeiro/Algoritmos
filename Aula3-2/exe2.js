var prompt = require('prompt-sync')()

let lado1 = Number (prompt('Digite o tamanho do primeiro lado: '))
let lado2 = Number (prompt('Digite o tamanho do segundo lado: '))
let lado3 = Number (prompt('Digite o tamanho do terceiro lado: '))
let lado4 = Number (prompt('Digite o tamanho do quarto lado: '))

let resultado = ''

if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4){
    resultado = 'Este é um quadrado!'
}   else if(lado1 === lado3 && lado2 === lado4){
    resultado = 'Este é um retangulo!'
}   else if(lado1 === lado2 && lado3 === lado4 && lado1 !== lado3 ){
   resultado ='Este é um losango!'
}   else {
    resultado = 'Esta é outra forma geometrica!'
}  
    console.log(resultado)