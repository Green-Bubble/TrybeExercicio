//Para testar - Exercício 1:

import Person from './Person';

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

// Para testar - Exercício 2:

import Student from './Student';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

console.log(carolina.sumAverageGrade());
console.log(lucas.sumAverageGrade());

// Para testar - Exercício 3:

import Employee from './Employee';

const testInterfaceEmployee: Employee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `FNC${randomStr}`;
    },
}

console.log((testInterfaceEmployee));
