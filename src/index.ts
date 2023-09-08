import criadorDePersonagem from "./helpers/criadorDePersonagem";
import PersonagemSimples from "./interfaces/PersonagemSimples";
import brigar from "./helpers/brigar";
import ResultadoCombate from "./interfaces/ResultadoCombate";

const quantidadeDeLutas = 1000;

let oponente1: PersonagemSimples = criadorDePersonagem("Glady", 3, 3, 3);
let oponente2: PersonagemSimples = criadorDePersonagem("King", 3, 3, 3);

interface TabelaDeVitoria {
    [nome: string]: number;
}

const tabelaDeVitoria: TabelaDeVitoria = {
    [oponente1.nome]: 0,
    [oponente2.nome]: 0,
}

let somaDeTurnos: number = 0;
let quantidadeDeCombates:  number = 0;

for (let i = 0; i < quantidadeDeLutas; i++) {
    const resultadoCombate: ResultadoCombate = brigar(oponente1, oponente2);
    const vencedor: PersonagemSimples = resultadoCombate.vitorioso;
    somaDeTurnos += resultadoCombate.quantidadeDeTurnos;
    quantidadeDeCombates += 1;

    oponente1 = criadorDePersonagem("Glady", 3, 5, 3);
    oponente2 = criadorDePersonagem("King", 3, 0, 3);

    tabelaDeVitoria[vencedor.nome] += 1;
}

const mediaTurnos: number = somaDeTurnos/quantidadeDeCombates;

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