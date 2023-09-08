"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const criadorDePersonagem_1 = __importDefault(require("./helpers/criadorDePersonagem"));
const brigar_1 = __importDefault(require("./helpers/brigar"));
const quantidadeDeLutas = 1000;
let oponente1 = (0, criadorDePersonagem_1.default)("Glady", 3, 3, 3);
let oponente2 = (0, criadorDePersonagem_1.default)("King", 3, 3, 3);
const tabelaDeVitoria = {
    [oponente1.nome]: 0,
    [oponente2.nome]: 0,
};
let somaDeTurnos = 0;
let quantidadeDeCombates = 0;
for (let i = 0; i < quantidadeDeLutas; i++) {
    const resultadoCombate = (0, brigar_1.default)(oponente1, oponente2);
    const vencedor = resultadoCombate.vitorioso;
    somaDeTurnos += resultadoCombate.quantidadeDeTurnos;
    quantidadeDeCombates += 1;
    oponente1 = (0, criadorDePersonagem_1.default)("Glady", 3, 5, 3);
    oponente2 = (0, criadorDePersonagem_1.default)("King", 3, 0, 3);
    tabelaDeVitoria[vencedor.nome] += 1;
}
const mediaTurnos = somaDeTurnos / quantidadeDeCombates;
console.log(tabelaDeVitoria, mediaTurnos);
/* const rolagemOP1 = rolarD6(2)+oponente1.habilidade;
const rolagemOP2 = rolarD6(2)+oponente2.habilidade;

let oponenteInicial: PersonagemSimples;
let oponenteSecundario: PersonagemSimples;

if (rolagemOP1 >= rolagemOP2) {
    oponenteInicial = oponente1;
    oponenteSecundario = oponente2;
} else {
    oponenteInicial = oponente2;
    oponenteSecundario = oponente1;
}

let vencedor: string = '';

for (let i = 0; i < 10; i++) {
    brigar(oponenteInicial, oponenteSecundario);
    if (oponenteSecundario.PV <= 0) {
        vencedor = oponenteInicial.nome;
        break;
    }
    
    brigar(oponenteSecundario, oponenteInicial);
    if (oponenteInicial.PV <= 0) {
        vencedor = oponenteSecundario.nome;
        break;
    }
} */ 
