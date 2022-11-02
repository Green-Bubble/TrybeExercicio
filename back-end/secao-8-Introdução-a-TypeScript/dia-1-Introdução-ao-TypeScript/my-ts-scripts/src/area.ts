import readline from 'readline-sync';

const unitsK = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertK (value: number, baseUnit: string, conversionUnit: string): number {
  const fromIndex = unitsK.indexOf(baseUnit);
  const toIndex = unitsK.indexOf(conversionUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(unitsK, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(unitsK, "Escolha um número para a conversão:");

  const fromUnitChoice = unitsK[fromUnitChoiceIndex];
  const toUnitChoice = unitsK[toUnitChoiceIndex];

  const result = convertK(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  console.log(message);
}

exec();