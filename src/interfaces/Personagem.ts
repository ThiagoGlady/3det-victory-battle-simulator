import DesEVantagens from "./DesEVantagens";
import PersonagemSimples from "./PersonagemSimples";
import Pericia from "./Pericia";
import TagUtils from "../helpers/TagUtils";

export default class Personagem implements PersonagemSimples {
    // Descritivos
    nome: string;
    desc: string = "";

    // Pontuação
    pontosRestantes:number;
    experiencia:number = 0;
    
    // Características Base
    poder: number;
    habilidade: number;
    resistencia: number;

    // Características Derivadas
    readonly PA: number;
    readonly PM: number;
    readonly PV: number;

    // Coleções
    pericias: Pericia[];
    vantagens: DesEVantagens[];
    desvantagens: DesEVantagens[];

    constructor(nome:string, pod:number, hab:number, res:number, pontos: number) {
        this.nome = nome;
        this.poder = pod;
        this.habilidade = hab;
        this.resistencia = res;
        this.pontosRestantes = pontos - pod - hab - res;
        
        this.PA = this.calcPA();
        this.PM = this.calcPM();
        this.PV = this.calcPV();

        this.pericias = [];
        this.vantagens = [];
        this.desvantagens = [];
    }

    
    private calcPA(): number {
        // TODO: Adicionar uma busca por tags de PACT
        let { numero } = TagUtils.getTagsQueCombinam(this,"PACT","strict")
        return this.poder+(numero * 2)
    }
    
    private calcPM(): number {
        // TODO: Adicionar uma busca por tags de MANA
        let { numero } = TagUtils.getTagsQueCombinam(this,"MANA","strict")
        return (this.habilidade*5)+(numero * 10)
    }
    
    private calcPV(): number {
        // TODO: Adicionar uma busca por tags de VIDA
        let { numero } = TagUtils.getTagsQueCombinam(this,"VIDA","strict")
        return (this.resistencia*5)+(numero * 10)
    }

    addPericia(novaPericia: Pericia) {
        this.pericias.push(novaPericia)
    }

    rmPericia(tagParaRemover:string) {
        let index = this.pericias.findIndex((v)=>{
            v.tag.getTagCompleta() == tagParaRemover
        })
        if(index == -1) {
            return
        } else {
            this.pericias.splice(index,1);
        }
    }
    
}

