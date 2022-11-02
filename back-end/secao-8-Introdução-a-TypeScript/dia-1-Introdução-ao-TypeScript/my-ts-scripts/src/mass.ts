import readline from 'readline-sync';

const unitsG = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertG (value: number, baseUnit: string, conversionUnit: string): number {
  const fromIndex = unitsG.indexOf(baseUnit);
  const toIndex = unitsG.indexOf(conversionUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(unitsG, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(unitsG, "Escolha um número para a conversão:");

  const fromUnitChoice = unitsG[fromUnitChoiceIndex];
  const toUnitChoice = unitsG[toUnitChoiceIndex];

  const result = convertG(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  console.log(message);
}

exec();