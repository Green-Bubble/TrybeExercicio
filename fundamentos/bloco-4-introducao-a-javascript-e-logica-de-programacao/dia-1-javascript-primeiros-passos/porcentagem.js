let notaPorcentagem = 80;

if (notaPorcentagem < 0 || notaPorcentagem > 100) {
    console.log('Erro: nota inválida');
} else if (notaPorcentagem >= 90) {
    console.log(`Nota: ${notaPorcentagem}%, convertida para A`);
} else if (notaPorcentagem >= 80) {
    console.log(`Nota ${notaPorcentagem}%, convertida para B`);
} else if (notaPorcentagem >= 70) {
    console.log(`Nota ${notaPorcentagem}%, convertida para C`);
} else if (notaPorcentagem >= 60) {
    console.log(`Nota ${notaPorcentagem}%, convertida para D`);
} else if (notaPorcentagem >= 50) {
    console.log(`Nota ${notaPorcentagem}%, convertida para E`);
} else {
    console.log(`Nota ${notaPorcentagem}%, convertida para F`);
}
    


