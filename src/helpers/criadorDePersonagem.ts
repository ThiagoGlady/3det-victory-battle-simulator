import Personagem from "../interfaces/Personagem"
import PersonagemSimples from "../interfaces/PersonagemSimples";
const todasPericias: string[] = require("../../database/pericias.json");

const criadorDePersonagem = (nome: string, poder: number, habilidade: number, resistencia: number) => {
    const personagemAleatorio: PersonagemSimples = {
        nome,
        poder,
        habilidade,
        resistencia,
        PA: poder,
        PM: 5*habilidade,
        PV: 5*resistencia,
    }

    return personagemAleatorio;
}