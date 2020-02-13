import * as moment from 'moment'

let fs = require('fs'),
    log = console.log,
    events: event[] = [],
    currentTime: number = moment().unix(),
    newName: string = process.argv[4],
    newDescription: string = process.argv[5],
    newDate = moment( process.argv[6] , 'DD/MM/YYYY HH:mm')
   

type event = {
    name: string,
    description: string,
    date: any
};

if (newName && newDescription && newDate.unix() > currentTime ) {

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
                    date: newDate.format('DD/MM/YYYY HH:mm')
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
    log('event name, description and date ( e.g: "12/02/2020 12:30" ) ')    
}