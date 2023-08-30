"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (dados) => {
    let soma = 0;
    for (let i = 0; i < dados; i++) {
        const numeroDecimalAleatorio = Math.random();
        const numeroEntre1e6 = Math.floor(numeroDecimalAleatorio * 6) + 1;
        soma += numeroEntre1e6;
    }
    return soma;
};
