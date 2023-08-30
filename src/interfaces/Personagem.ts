import DesEVantagens from "./DesEVantagens";
import PersonagemSimples from "./PersonagemSimples";

export default interface Personagem extends PersonagemSimples {
    pericias: string[];
    vantagens: DesEVantagens[];
    desvantagens: DesEVantagens[];
}