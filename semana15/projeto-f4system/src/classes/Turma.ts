export abstract class Turma {
    protected professores: string[] = []
    protected alunos: string[] = []

    constructor(
        protected inicio: string,
        protected termino: string        
    ){}
}