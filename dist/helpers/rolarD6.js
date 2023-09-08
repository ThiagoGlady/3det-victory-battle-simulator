"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (dados, margemCrit = 0) => {
    let soma = 0;
    let criticos = 0;
    for (let i = 0; i < dados; i++) {
        const numeroDecimalAleatorio = Math.random();
        const numeroEntre1e6 = Math.floor(numeroDecimalAleatorio * 6) + 1;
        if (numeroEntre1e6 >= 6 - margemCrit)
            criticos += 1;
        soma += numeroEntre1e6;
    }
    return {
        soma,
        criticos,
    };
};
