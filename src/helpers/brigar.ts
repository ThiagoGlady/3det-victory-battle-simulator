import PersonagemSimples from "../interfaces/PersonagemSimples"
import rolarD6 from "./rolarD6"
import ResultadoCombate from "../interfaces/ResultadoCombate";

const turnoDeAtaque = (atacante: PersonagemSimples, defensor: PersonagemSimples): number => {
    const rolagemAtaque = rolarD6(2);
    const rolagemDefesa = rolarD6(2);
    
    const ataque = atacante.poder + rolagemAtaque.soma + atacante.poder * rolagemAtaque.criticos;
    const defesa = defensor.resistencia + rolagemDefesa.soma + defensor.resistencia * rolagemDefesa.criticos;

    if (defesa >= ataque) {
        defensor.PV -= 1;
        return 1;
    }
    
    const dano = ataque - defesa;
    defensor.PV -= dano;

    return dano;
}

const ordemDeCombate = (oponente1: PersonagemSimples, oponente2: PersonagemSimples): PersonagemSimples[] => {
    let oponenteInicial: PersonagemSimples = oponente1;
    let oponenteSecundario: PersonagemSimples = oponente2;

    while (true) {
        const rolagemIniciativaOP1 = rolarD6(2);
        const rolagemIniciativaOP2 = rolarD6(2);

        const iniciativaOP1 = rolagemIniciativaOP1.soma + oponente1.habilidade + oponente1.habilidade * rolagemIniciativaOP1.criticos;
        const iniciativaOP2 = rolagemIniciativaOP2.soma + oponente2.habilidade + oponente2.habilidade * rolagemIniciativaOP2.criticos; 

        if (iniciativaOP1 > iniciativaOP2) {
            oponenteInicial = oponente1;
            oponenteSecundario = oponente2;
            break;
        } else if (iniciativaOP1 < iniciativaOP2) {
            oponenteInicial = oponente2;
            oponenteSecundario = oponente1;
            break;
        }
    }

    return [oponenteInicial, oponenteSecundario];
}

export default (oponente1: PersonagemSimples, oponente2: PersonagemSimples): ResultadoCombate => {
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
    }
}