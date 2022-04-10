let pecaXadrez = 'dama';

if (pecaXadrez.toLowerCase() == 'dama') {
    console.log('Dama: mova na diagonal ao longo da coluna ou fileira');
} else if (pecaXadrez.toLowerCase() == 'rei') {
    console.log('Rei: mova para qualquer casa adjacente');
} else if (pecaXadrez.toLowerCase() == 'bispo') {
    console.log('Bispo: mova ao longo da diagonal que ele ocupa');
} else if (pecaXadrez.toLowerCase() == 'cavalo') {
    console.log('Cavalo: mova para a casa mais próxima não adjacente');
} else if (pecaXadrez.toLowerCase() == 'torre') {
    console.log('Torre: mova ao longo da fileira ou coluna que ocupa');
} else if (pecaXadrez.toLowerCase() == 'peão') {
    console.log('Peão: mova uma casa à sua frente; duas casas no primeiro movimento');
} else {
    console.log('Erro: peça inválida');
}
