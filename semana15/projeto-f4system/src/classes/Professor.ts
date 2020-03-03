import { Membro } from './Membro'

export class Professor extends Membro {
    constructor(
        nome: string,
        email: string,
        dataNascimento: string,
        public especialidades: string
    ) {
        super(nome, email, dataNascimento)
    }
}