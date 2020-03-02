let fs = require('fs'), log = console.log


const firstPromise = new Promise((resolve, reject) => {

    fs.readdir('textos/', (error:Error , data: Buffer) => {
        if (error) {
            reject(error)
        } else {
            resolve(data)
        }
    })

}).then(
    (files: string[]) => Promise.all(
        generatePromises(files)
    ).then(
        values => log(
            values.map(
                value => value.toString()
            ).join(' ')
        )
    )
).catch(
    err => log(err)
)

function generatePromises(files: string[]) {
    return files.map(
        file => new Promise((resolve, reject) => {
            fs.readFile(`./textos/${file}`, (error: Error, data: Buffer) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(data)
                }
            })
        })
    )
}

