"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsG = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertG(value, baseUnit, conversionUnit) {
    const fromIndex = unitsG.indexOf(baseUnit);
    const toIndex = unitsG.indexOf(conversionUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsG, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsG, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsG[fromUnitChoiceIndex];
    const toUnitChoice = unitsG[toUnitChoiceIndex];
    const result = convertG(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
