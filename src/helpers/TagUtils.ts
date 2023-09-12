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
    tagExisteNoPersonagem(personagem: Personagem, tag:string, tipo: "lax" | "strict") {
        // let tags = []
        let search: string | RegExp = "";
        if(tipo == "lax") {
            search = tag;
        } else if(search == "strict") {
            search = /^/g
        }

        for (let i = 0; i < personagem.pericias.length; i++) {
            const pericia = personagem.pericias[i];

            return this.auxiliarComparacao(tag,pericia.tag.getTagCompleta(),tipo)
            
        }

        for (let i = 0; i < personagem.vantagens.length; i++) {
            const vantagem = personagem.vantagens[i];

            
            if(vantagem.tags.find((value)=>{return value.getTagCompleta().search(tag) >= 0}))  {
                return true
            }
            
        }

        for (let i = 0; i < personagem.desvantagens.length; i++) {
            const desvantagem = personagem.desvantagens[i];

            if(desvantagem.tags.find((value)=>{return value.getTagCompleta().search(tag) >= 0}))  {
                return true
            }
            
        }
    }

    getTagsQueCombinam() {

    }

    tagExisteNaVantagem()  {
        throw new Error("Function not implemented.");
    }

    private auxiliarComparacao(var1: string, var2: string, tipo:"strict" | "lax") {
        if(tipo == "strict") {
            return var1 == var2
        } else if(tipo == "lax") {
            return var1.includes(var2)
        } else {
            throw new Error("Incorrect Enum type");
        }
    }

}