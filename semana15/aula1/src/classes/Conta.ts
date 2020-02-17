import Despesa from './Despesa'

export default class Conta{
    saldo: number
    nome: string
    cpf: string
    idade: number
    despesas: Despesa[]

    constructor( nome: string, cpf: string, idade: number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.despesas = []
        this.saldo = 0
    }

    buscarSaldo(){

    }

    depositar(valor: number){
        this.saldo += valor
    }
}