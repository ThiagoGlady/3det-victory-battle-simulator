"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rolarD6_1 = __importDefault(require("./rolarD6"));
const turnoDeAtaque = (atacante, defensor) => {
    let rolagemAtaque;
    if (atacante.nome === "Glady") {
        rolagemAtaque = (0, rolarD6_1.default)(2);
    }
    else {
        rolagemAtaque = (0, rolarD6_1.default)(3);
    }
    const rolagemDefesa = (0, rolarD6_1.default)(2);
    let ataque = atacante.poder + rolagemAtaque.soma + atacante.poder * rolagemAtaque.criticos;
    if (atacante.nome === "Glady")
        ataque += 3.5;
    const defesa = defensor.resistencia + rolagemDefesa.soma + defensor.resistencia * rolagemDefesa.criticos;
    if (defesa >= ataque) {
        defensor.PV -= 1;
        return 1;
    }
    const dano = ataque - defesa;
    defensor.PV -= dano;
    return dano;
};
const ordemDeCombate = (oponente1, oponente2) => {
    let oponenteInicial = oponente1;
    let oponenteSecundario = oponente2;
    while (true) {
        const rolagemIniciativaOP1 = (0, rolarD6_1.default)(2);
        const rolagemIniciativaOP2 = (0, rolarD6_1.default)(2);
        const iniciativaOP1 = rolagemIniciativaOP1.soma + oponente1.habilidade + oponente1.habilidade * rolagemIniciativaOP1.criticos;
        const iniciativaOP2 = rolagemIniciativaOP2.soma + oponente2.habilidade + oponente2.habilidade * rolagemIniciativaOP2.criticos;
        if (iniciativaOP1 > iniciativaOP2) {
            oponenteInicial = oponente1;
            oponenteSecundario = oponente2;
            break;
        }
        else if (iniciativaOP1 < iniciativaOP2) {
            oponenteInicial = oponente2;
            oponenteSecundario = oponente1;
            break;
        }
    }
    return [oponenteInicial, oponenteSecundario];
};
exports.default = (oponente1, oponente2) => {
    const [oponenteInicial, oponenteSecundario] = ordemDeCombate(oponente1, oponente2);
    let vitorioso = oponenteInicial;
    let quantidadeDeTurnos = 0;
    while (true) {
        turnoDeAtaque(oponenteInicial, oponenteSecundario);
        quantidadeDeTurnos += 1;
        if (oponenteSecundario.PV <= 0) {
            break;
        }
        turnoDeAtaque(oponenteSecundario, oponenteInicial);
        if (oponenteInicial.PV <= 0) {
            vitorioso = oponenteSecundario;
            break;
        }
    }
    return {
        vitorioso,
        quantidadeDeTurnos,
    };
};
