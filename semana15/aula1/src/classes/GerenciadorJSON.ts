import { readFileSync, writeFileSync } from 'fs'

export default class GerenciadorJSON {

    nomeArquivo: string

    constructor(nomeArquivo: string) {
        this.nomeArquivo = nomeArquivo
    }

    buscarContas(nomeArquivo: string) {
        return JSON.parse(
            readFileSync(nomeArquivo).toString()
        )
    }

    salvarContas(contas: any) {
        writeFileSync(this.nomeArquivo, JSON.stringify(contas))
    }
};