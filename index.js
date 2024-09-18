let nome = 'Lucas';
const valorXP = 1;
let rank = '';

switch (true) {
    
    case valorXP <= 1000:
        rank += 'Ferro ';
        break;
    case valorXP > 1000 && valorXP <= 2000:
        rank += 'Bronze ';
        break;
    case valorXP > 2000 && valorXP <= 5000:
        rank += 'Prata ';
        break;
    case valorXP > 5000 && valorXP <= 7000:
        rank += 'Ouro ';
        break;
    case valorXP > 7000 && valorXP <= 8000 :
        rank += 'Platina ';
        break;
    case valorXP > 8000 && valorXP <= 9000:
        rank += 'Ascendente ';
        break;
    case valorXP > 9000 && valorXP <= 10000 :
        rank += 'Imortal ';
        break;
    case valorXP >= 10001:
        rank += 'Radiante ';
        break;
}

console.log(`O Herói de nome ${nome} está no nível de ${rank}`)
