import { Turma } from './Turma'

export class TurmaWeb extends Turma {
    constructor(
        public patrono: string,
        inicio: string,
        termino: string        
    ) {
        super(inicio, termino)
    }
}