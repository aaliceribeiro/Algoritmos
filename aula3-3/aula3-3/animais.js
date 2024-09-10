const prompt = require("prompt-sync")();

let animal =  (prompt("Digite o nome de um animal: "))

    if (animal === "cachorro" || animal === "gato" || animal === "elefante" || 
        animal === "tigre" || animal === "coelho") {
         console.log("Mamífero");
    } 
    else if (animal === "águia" || animal === "pato" || animal === "pinguim" || 
             animal === "papagaio" || animal === "coruja") {
                console.log("Ave");
    } 
    else if (animal === "cobra" || animal === "jacaré" || animal === "tartaruga" || 
             animal === "lagarto" || animal === "crocodilo") {
                console.log("Réptil");
    } 
    else if (animal === "tubarão" || animal === "salmão" || animal === "tilápia" || 
             animal === "atum" || animal === "bacalhau") {
                console.log("Peixe");
    } 
    else if (animal === "sapo" || animal === "rã" || animal === "salamandra" || 
             animal === "perereca" || animal === "tritão") {
                console.log("Anfíbio");
    } 
    else {
        console.log("Animal não encontrado.")
    }



