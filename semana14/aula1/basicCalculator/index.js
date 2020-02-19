let operation = process.argv[2] || 'none',
    firstTerm = Number(process.argv[3]) || 'invalid',
    secondTerm = Number(process.argv[4]) || 'invalid',
    answer,
    chalk = require('chalk')


if ((typeof(secondTerm) === 'number') && (typeof(firstTerm) === 'number')) {

    switch (operation) {
        case 'add':
            answer = firstTerm + secondTerm
            break
        case 'sub':
            answer = firstTerm - secondTerm
            break
        case 'mult':
            answer = firstTerm * secondTerm
            break
        case 'div':
            answer = (firstTerm / secondTerm).toFixed(3)
            break
        default:
            console.log(chalk.bgRed("Operador inválido ou ausente"))
            console.log(chalk.yellow("Informe um operador dentre os seguintes: 'add', 'sub', 'mult', 'div'"))
    }

    if (typeof(answer) === 'number') console.log(chalk.bgGreen.black("Resposta: ", answer))


} else {
    console.log(chalk.bgRed("Números ausentes ou em formato inválido"))
}