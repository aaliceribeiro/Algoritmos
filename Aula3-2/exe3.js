var prompt = require('prompt-sync')()

let n1 = Number (prompt('Vendas do primeiro mes: '))
let n2 = Number (prompt('Vendas do segundo mes: '))
let n3 = Number (prompt('Vendas do terceiro mes: '))

let total = n1 + n2 + n3 
let resultado

if(total < 5000){
    resultado = total * 0 
}
  else if (total >= 5000 && total <= 10000) {
    resultado = total * 0.05
  }
  else {
    resultado = total * 0.10
  }

  console.log (`Sua comissão é: ${resultado}` )