export default class Despesa {

    valor: number
    descricao: string
    cpf: string

    constructor(valor: number, descricao: string, cpf: string) {
        this.valor = valor
        this.descricao = descricao
        this.cpf = cpf
    }
}