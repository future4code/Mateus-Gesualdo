import data from './LeitorJSON'
import save from './EscritorJSON'
import { TurmaWeb } from './classes/TurmaWeb'
import { TurmaMobile } from './classes/TurmaMobile'
import { Aluno } from './classes/Aluno'
import { Professor } from './classes/Professor'

const arg = process.argv.filter(
    (param, i) => i > 4
)

let turmas = data


switch (process.argv[4]) {
    case "nova-turma-web":
        turmas.push(new TurmaWeb(arg[0], arg[1], arg[2]))
        break
    case "nova-turma-mobile":
        turmas.push(new TurmaMobile(Number(arg[0]), arg[1], arg[2]))
        break
    case "novo-professor":
        turmas = turmas.map((turma: any) => {
            if (turma.patrono === arg[0] || turma.numero === Number(arg[0])) {
                turma.professores.push(new Professor(arg[1], arg[2], arg[3], arg[4]))
            }
            return turma
        })
        break
    case "novo-aluno":
        turmas = turmas.map((turma: any) => {
            if (turma.patrono === arg[0] || turma.numero === Number(arg[0])) {
                turma.alunos.push(new Aluno(arg[1], arg[2], arg[3]))
            }
            return turma
        })
        break
}

save(turmas)

