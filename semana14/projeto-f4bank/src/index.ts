import * as moment from 'moment'
import { readFile, writeFileSync } from 'fs'

// *** TIPOS *** //

type despesa = {
    valor: number,
    descricao: string,
    data: Date
};

type conta = {
    titular: {
        nome: string,
        cpf: number,
        nascimento: Date
    },
    despesas: despesa[],
    saldo: number
};

// *** LEITURA DO BANCO DE DADOS *** //

new Promise((resolve, reject) => {

    readFile('contas/index.json', (err: Error, buffer: Buffer) => {

        if (err) {
            reject(err)
        } else {
            resolve(buffer.toString())
        }
    })
}).then(
    (string: string) => executarAcaoUsuario(JSON.parse(string))
).catch(
    err => console.log(err)
)

// *** AÇÃO DO USUÁRIO *** //

function executarAcaoUsuario(contas) {

    switch (process.argv[4]) {

        case 'cadastrar':
            contas.push({
                "titular": {
                    "nome": process.argv[5],
                    "cpf": process.argv[6],
                    "nascimento": process.argv[7]
                },
                "despesas": [],
                "saldo": 0
            })
            break

        case 'exibirSaldo':
            const conta: conta = contas.find((conta: conta) =>
                conta.titular.nome === process.argv[5] &&
                Number(conta.titular.cpf) === Number(process.argv[6])
            )
            console.log(
                conta ?
                    'Saldo: ' + conta.saldo + ',00 Reais' :
                    'Dados não conferem'
            )
            break

        case 'depositar':
            contas.forEach((conta: conta) => {
                if (
                    conta.titular.nome === process.argv[5] &&
                    Number(conta.titular.cpf) === Number(process.argv[6])
                ) {
                    conta.saldo += Number(process.argv[7])
                }
            })
            break

        default:
            console.log("Comando inválido")
    }

// *** ATUALIZAÇÃO DO BANCO DE DADOS *** //

    try {
        writeFileSync('contas/index.json', JSON.stringify(contas))
    } catch (err) {
        console.log(err)
    }
}


