import dadosComplexos from "../../database/dadosComplexos.json";
import Pericia from "../interfaces/Pericia";
import Tag from "../interfaces/Tag";

export default () => {
    let periciasJSON = dadosComplexos.pericias;
    let periciasLista: Pericia[] = []

    for (let i = 0; i < periciasJSON.length; i++) {
        const periciaAtualJSON = periciasJSON[i];
        
        let novaPericia = {
            nome: periciaAtualJSON.nome,
            tag: new Tag(periciaAtualJSON.tag.id),
            texto: periciaAtualJSON.texto
        }

        periciasLista.push(novaPericia);
    }

    return periciasLista;
}