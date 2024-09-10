const prompt = require("prompt-sync")();

const num1 = prompt("Digite um número de cartão de crédito: ");

// Remove caracteres não numéricos
const numero = num1.replace(/\D/g, '');

// Verifica o comprimento do número
if (numero.length !== 16) {
    console.log("Número de cartão inválido.");
} else {
    // Verifica o prefixo
    const primeirosNum = numero.charAt(0);

    if (primeirosNum === '4') {
        console.log("Cartão VISA.");
    } else if (primeirosNum === '5') {
        console.log("Cartão Mastercard.");
    } else if (primeirosNum === '6') {
        console.log("Cartão Discover.");
    } else {
        console.log("Cartão inválido.");
    }
}






