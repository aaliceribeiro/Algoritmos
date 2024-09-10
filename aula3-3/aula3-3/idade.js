
    let categoria = Number (prompt("Digite sua idade: "))


    if (idade >= 0 && idade <= 12) {
        categoria = 'Criança';

    } else if (idade >= 13 && idade <= 17) {
        categoria = 'Adolescente';

    } else if (idade >= 18 && idade <= 64) {
        categoria = 'Adulto';

    } else if (idade >= 65) {
        categoria = 'Idoso';

    } else {
        categoria = 'Idade inválida';
    }

    


