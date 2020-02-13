import * as moment from 'moment'

let fs = require('fs'),
    log = console.log,
    events: event[] = [],
    newName: string = process.argv[4],
    newDescription: string = process.argv[5],
    newDate = new Date(
        Number(process.argv[6]),
        Number(process.argv[7]) - 1,
        Number(process.argv[8]),
        Number(process.argv[9]) - 3,
        Number(process.argv[10]),

    ),
    timeStamp: number = newDate.getTime()

type event = {
    name: string,
    description: string,
    date: Date
};

if (newName && newDescription && newDate.getTime() > Date.now()) {
    new Promise((resolve, reject) => {
        fs.readFile('events/index.json', (err: Error, events: Buffer) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(events.toString()))
            }
        })
    }).then(
        (data: event[]) => {
            events = [
                ...data,
                {
                    name: newName,
                    description: newDescription,
                    date: newDate
                }
            ]
            fs.writeFileSync('events/index.json', JSON.stringify(events))
        }
    ).catch(
        err => log(err)
    )


} else { 
    log('Error: Bad parameters.')  
    log('Please inform:')
    log('event name, description and date ( year, month, day, hours, minutes ) ')    
}