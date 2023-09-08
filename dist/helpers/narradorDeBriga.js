"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brigar_1 = __importDefault(require("./brigar"));
const sleep_1 = __importDefault(require("./sleep"));
exports.default = (oponenteAtacante, oponenteDefensor) => {
    console.log(`${oponenteAtacante.nome} ataca ${oponenteDefensor.nome}!\n`);
    (0, sleep_1.default)(1000);
    const dano = (0, brigar_1.default)(oponenteAtacante, oponenteDefensor);
    console.log(`causou ${dano} de dano!\n`);
    (0, sleep_1.default)(2000);
    if (dano < 5) {
        console.log(`Não foi muito efetivo...\n`);
    }
    else if (dano < 10) {
        console.log(`Doeu!\n`);
    }
    else {
        console.log(`Que isso ${oponenteAtacante.nome}, pega leve!\n`);
    }
};
