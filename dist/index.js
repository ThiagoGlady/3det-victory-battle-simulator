"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const criadorDePersonagem_1 = __importDefault(require("./helpers/criadorDePersonagem"));
const rolarD6_1 = __importDefault(require("./helpers/rolarD6"));
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const oponente1 = (0, criadorDePersonagem_1.default)("Filho", 3, 1, 2);
const oponente2 = (0, criadorDePersonagem_1.default)("Saeva", 2, 1, 3);
console.log('Que comecem os jogos!\n');
sleep(2000);
const rolagemOP1 = (0, rolarD6_1.default)(2) + oponente1.habilidade;
console.log(`${oponente1.nome} tirou ${rolagemOP1} na Iniciativa`);
sleep(2000);
const rolagemOP2 = (0, rolarD6_1.default)(2) + oponente2.habilidade;
console.log(`${oponente2.nome} tirou ${rolagemOP2} na Iniciativa`);
sleep(1000);
if (rolagemOP1 >= rolagemOP2) {
    console.log(`${oponente1.nome} começa!`);
}
else {
    console.log(`${oponente2.nome} começa!`);
}
