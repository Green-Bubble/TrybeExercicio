import readline from 'readline-sync';

const unitsL = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertL (value: number, baseUnit: string, conversionUnit: string): number {
  const fromUnit = unitsL.indexOf(baseUnit);
  const toUnit = unitsL.indexOf(conversionUnit);
  const exponent = toUnit - fromUnit;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(unitsL, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(unitsL, "Escolha um número para a conversão:");

  const fromUnitChoice = unitsL[fromUnitChoiceIndex];
  const toUnitChoice = unitsL[toUnitChoiceIndex];

  const result = convertL(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  console.log(message);
}

exec();