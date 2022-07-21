const numero1 = 60;
const numero2 = 42;
const numero3 = 80;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`O número ${numero1} é o maior dos três números.`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O número ${numero2} é o maior dos três números.`)
} else {
    console.log(`O número ${numero3} é o maior dos três números.`)
}