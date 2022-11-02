"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsL = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertL(value, baseUnit, conversionUnit) {
    const fromUnit = unitsL.indexOf(baseUnit);
    const toUnit = unitsL.indexOf(conversionUnit);
    const exponent = toUnit - fromUnit;
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsL, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsL, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsL[fromUnitChoiceIndex];
    const toUnitChoice = unitsL[toUnitChoiceIndex];
    const result = convertL(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
