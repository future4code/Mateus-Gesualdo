let taskList,
    newTask,
    dataBase,
    fs = require('fs'),
    chalk = require('chalk')

if (process.argv[2]) {

    dataBase = process.argv[2].toString()

    try {
        taskList = JSON.parse(
            fs.readFileSync(dataBase, 'utf8')
        )
    } catch {
        console.log(chalk.bgRed('Arquivo não encontrado'))
    }

    if (process.argv[3]) {
        newTask = process.argv[3],
            taskList.push(newTask)

        try {
            fs.writeFileSync(dataBase, JSON.stringify(taskList), 'utf8')
        } catch (err) {
            console.log(chalk.bgRed(err))
        }
    } else {
        console.log(chalk.bgRed('Nenhuma tarefa informada'))
    }


} else {
    console.log(chalk.bgRed('Informe o arquivo de referência'))
}


