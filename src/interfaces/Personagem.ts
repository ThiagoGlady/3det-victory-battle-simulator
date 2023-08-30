import DesEVantagens from "./DesEVantagens";

export default interface Personagem {
    nome: string;
    poder: number;
    habilidade: number;
    resistencia: number;
    PA: number;
    PM: number;
    PV: number;
    pericias: string[];
    vantagens: DesEVantagens[];
    desvantagens: DesEVantagens[];
}