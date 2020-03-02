import * as moment from 'moment'

export class ErrorPrinter {

    constructor(private message: string) { }
    
    onError(): void {
        console.log(
            'Erro: ',
            this.message,
            '-',
            moment().format('DD/MM/YYYY, HH:mm')
        )
    }
}