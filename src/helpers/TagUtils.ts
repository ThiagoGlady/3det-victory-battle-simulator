import DesEVantagens from "../interfaces/DesEVantagens";
import Personagem from "../interfaces/Personagem";
import Tag from "../interfaces/Tag";

export default class TagUtils {

    /**
     * Procura em todas as perícias e vantagens e desvantagens passivas por tags que combinem com a tag informada na função
     * @param personagem Personagem no qual acontecerá a checagem
     * @param tag Tag que está sendo procurada
     * @param tipo Se for "lax", qualquer tag que contenha a tag enviada será considerada. Se for "strict", apenas tags exatamente iguais (sem modificado ou número, por exemplo) serão consideradas
     * @returns Verdadeiro ou falso
     */
    static tagExisteNoPersonagem(personagem: Personagem, tag:string, tipo: "lax" | "strict") {
        // let tags = []
        if(personagem == undefined) {
            return false
        }

        for (let i = 0; i < personagem.pericias.length; i++) {
            const pericia = personagem.pericias[i];

            return this.auxiliarComparacao(tag,pericia.tag.getTagCompleta(),tipo)
            
        }

        for (let i = 0; i < personagem.vantagens.length; i++) {
            const vantagem = personagem.vantagens[i];

            
            if(vantagem.tags.find((value)=>{return this.auxiliarComparacao(tag,value.getTagCompleta(),tipo)}))  {
                return true
            }
            
        }

        for (let i = 0; i < personagem.desvantagens.length; i++) {
            const desvantagem = personagem.desvantagens[i];

            if(desvantagem.tags.find((value)=>{return this.auxiliarComparacao(tag,value.getTagCompleta(),tipo)}))  {
                return true
            }
            
        }

        return false
    }

    static getTagsQueCombinam(personagem: Personagem, tag:string, tipo: "lax" | "strict") {
        if(personagem == undefined) {
            return {
                numero:0,
                tags:[]
            }
        }

        let tagsEncontradas: string[] = [];

        for (let i = 0; i < personagem.pericias.length; i++) {
            const pericia = personagem.pericias[i];

            if(this.auxiliarComparacao(tag,pericia.tag.getTagCompleta(),tipo)) {
                tagsEncontradas.push(pericia.tag.getTagCompleta())
            }
            
        }

        for (let i = 0; i < personagem.vantagens.length; i++) {
            const vantagem = personagem.vantagens[i];

            
            vantagem.tags.filter((value)=>this.auxiliarComparacao(tag,value.getTagCompleta(),tipo)).forEach(r=>{
                tagsEncontradas.push(r.getTagCompleta())
            })
            
        }

        for (let i = 0; i < personagem.desvantagens.length; i++) {
            const desvantagem = personagem.desvantagens[i];

            desvantagem.tags.filter((value)=>this.auxiliarComparacao(tag,value.getTagCompleta(),tipo)).forEach(r=>{
                tagsEncontradas.push(r.getTagCompleta())
            })
            
        }

        return {
            numero: tagsEncontradas.length,
            tags: tagsEncontradas
        }
    }

    static tagExisteNaVantagem(vantagem: DesEVantagens, tag:string, tipo: "lax" | "strict")  {
        if(vantagem.tags.find((value)=>{return this.auxiliarComparacao(tag,value.getTagCompleta(),tipo)}))  {
            return true
        } else {
            return false
        }
    }

    static auxiliarComparacao(var1: string, var2: string, tipo:"strict" | "lax") {
        if(tipo == "strict") {
            return var1 == var2
        } else if(tipo == "lax") {
            return var1.includes(var2)
        } else {
            throw new Error("Incorrect Enum type");
        }
    }

}