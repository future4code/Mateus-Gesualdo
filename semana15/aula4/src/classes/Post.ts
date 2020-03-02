import * as moment from 'moment'

export class Post {
    private date: string = moment().format('DD/MM/YYYY, HH:mm')

    constructor(
        private author: string,
        private text: string
    ) { }

    getAuthor = () => this.author

    getText = () => this.text
}