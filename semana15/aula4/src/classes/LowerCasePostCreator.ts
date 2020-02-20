import { UpperCasePostCreator } from './UpperCasePostCreator'

export class LowerCasePostCreator extends UpperCasePostCreator {
    constructor(
        author: string,
        text: string
    ) {
        super(author, text)
        if (this.text.indexOf('%') === 0) {
            this.text = this.text.slice(1).toLowerCase()
        }
    }
}