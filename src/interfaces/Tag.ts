export default class Tag {
    // Quatro caracteres de A a Z, maiúsculos 
    private readonly identificador: string;
    
    // Símbolo +, -, *, ...
    // Indica o que a tag significa. Pode ser vazio
    // + = Bônus numérico em testes daquela tag
    // - = Penalidade numérica em testes daquela tag
    // * = Ganho em testes daquela tag
    // % = Perda em testes daquela tag
    private readonly modificador: string;

    // Número de 1 a 9 usado quando for necessário
    private readonly numero: string;

    constructor(id:string,mod:string="",num:string="") {
        this.modificador = mod;
        this.identificador = id;
        this.numero = num;
    }

    getTagCompleta() {
        return this.modificador + this.identificador + this.numero
    }

    toString() : string {
        return this.getTagCompleta()
    }

}