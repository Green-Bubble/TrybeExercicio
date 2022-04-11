let word = 'tryber';
let palavraInvertida = '';

for (let index = 0; index < word.length; index += 1) {
    palavraInvertida += word[word.length - 1 - index];
}

console.log(palavraInvertida);