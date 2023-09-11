import Tag from "./Tag";

export default interface DesEVantagens {
    nome: string;
    tags: Tag[];
    texto: string;
    tagTipo: Tag;
    custoPontos: number
    custoPM?: number;
}