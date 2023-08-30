import Personagem from "../interfaces/Personagem"

const criadorDePersonagem = (nome: string, poder: number, habilidade: number, resistencia: number) => {
    const personagemAleatorio: Personagem = {
        nome,
        poder,
        habilidade,
        resistencia,
        PA: poder,
        PM: 5*habilidade,
        PV: 5*resistencia,
    }

    
}