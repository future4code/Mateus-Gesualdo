import GerenciadorJSON from './GerenciadorJSON'
import Conta from './Conta'

export default class Banco {
    gerenciadorDeArquivos: GerenciadorJSON
    contas: Conta[]
    
    constructor(){
        this.gerenciadorDeArquivos = new GerenciadorJSON('./src/contas.json')
        this.contas = []
    }

    criarConta(): void{

    }

    buscarContas(path: string){
        this.contas = this.gerenciadorDeArquivos.buscarContas(path)
    }

    buscarContaPorCPF(){

    }

    salvarContas(){

    }
}