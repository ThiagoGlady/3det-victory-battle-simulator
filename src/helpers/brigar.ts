import PersonagemSimples from "../interfaces/PersonagemSimples"
import rolarD6 from "./rolarD6"

export default (atacante: PersonagemSimples, defensor: PersonagemSimples): void => {
    const ataque = rolarD6(2) + atacante.poder;
    const defesa = rolarD6(2) + defensor.resistencia;

    if (defesa >= ataque) {
        defensor.resistencia -= 1;
        return;
    }

    defensor.resistencia -= ataque - defesa;
}