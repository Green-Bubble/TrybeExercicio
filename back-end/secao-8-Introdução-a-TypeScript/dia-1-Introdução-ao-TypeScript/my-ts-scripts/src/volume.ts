import readline from 'readline-sync';

const unitsV = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertV(value: number, baseUnit: string, conversionUnit: string): number {
  const fromIndex = unitsV.indexOf(baseUnit);
  const toIndex = unitsV.indexOf(conversionUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(unitsV, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(unitsV, "Escolha um número para a conversão:");

  const fromUnitChoice = unitsV[fromUnitChoiceIndex];
  const toUnitChoice = unitsV[toUnitChoiceIndex];

  const result = convertV(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  console.log(message);
}

exec();