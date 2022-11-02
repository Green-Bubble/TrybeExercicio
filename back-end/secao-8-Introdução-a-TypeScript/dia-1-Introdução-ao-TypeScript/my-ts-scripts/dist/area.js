"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsK = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convertK(value, baseUnit, conversionUnit) {
    const fromIndex = unitsK.indexOf(baseUnit);
    const toIndex = unitsK.indexOf(conversionUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsK, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsK, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsK[fromUnitChoiceIndex];
    const toUnitChoice = unitsK[toUnitChoiceIndex];
    const result = convertK(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
