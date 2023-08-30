"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todasPericias = require("../../database/pericias.json");
exports.default = (nome, poder, habilidade, resistencia) => {
    const personagem = {
        nome,
        poder,
        habilidade,
        resistencia,
        PA: poder,
        PM: 5 * habilidade,
        PV: 5 * resistencia,
    };
    return personagem;
};
