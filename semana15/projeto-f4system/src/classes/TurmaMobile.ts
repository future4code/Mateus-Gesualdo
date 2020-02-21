import { Turma } from './Turma'

export class TurmaMobile extends Turma {
    constructor(
        public numero: number,
        inicio: string,
        termino: string        
    ) {
        super(inicio, termino)
    }
}