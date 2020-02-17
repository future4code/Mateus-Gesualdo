import Banco from './classes/Banco'
// import Conta from '../src/Conta'
// import Despesa from '..src/Despesa'
// import GerenciadorJSON from './GerenciadorJSON'

const banco = new Banco

banco.buscarContas('./src/contas.json')

console.log(banco.contas)