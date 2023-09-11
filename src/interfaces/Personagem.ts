import DesEVantagens from "./DesEVantagens";
import PersonagemSimples from "./PersonagemSimples";
import Pericia from "./Pericia";

export default class Personagem implements PersonagemSimples {
    nome: string;
    poder: number;
    habilidade: number;
    resistencia: number;
    PA: number;
    PM: number;
    PV: number;
    pericias: Pericia[];
    vantagens: DesEVantagens[];
    desvantagens: DesEVantagens[];

    constructor(nome, pod, hab, res) {
        this.nome = nome;
        this.poder = pod;
        this.habilidade = hab;
        this.resistencia = res;
        this.PA = calcPA();
        this.PM = calcPM();
        this.PV = calcPV();
        this.pericias = [];
        this.vantagens = [];
        this.desvantagens = [];
    }

    
}

function calcPA(): number {
    throw new Error("Function not implemented.");
}

function calcPM(): number {
    throw new Error("Function not implemented.");
}

function calcPV(): number {
    throw new Error("Function not implemented.");
}
