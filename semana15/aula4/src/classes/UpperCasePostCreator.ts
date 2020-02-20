import { NormalPostCreator } from './NormalPostCreator'

export class UpperCasePostCreator extends NormalPostCreator {
    constructor(
        author: string,
        text: string
    ) {
        super(author, text)
        if (this.text.indexOf('&') === 0) {
            this.text = this.text.slice(1).toUpperCase()
        }
    }
}