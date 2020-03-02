import { PostCreator } from '../interfaces/PostCreator'
import { FileManager } from './FileManager'
import {Post} from './Post'
import {ErrorPrinter} from './ErrorPrinter'

export class NormalPostCreator implements PostCreator {

    private errorPrinter = new ErrorPrinter("Defina um autor e um conteúdo para o seu post")

    constructor(
        protected author: string,
        protected text: string
    ) {}

    create = (): void => { 

        const posts = FileManager.read('data.json')

        const newPost = new Post(this.author, this.text) 

        if (newPost.getAuthor() && newPost.getText()) {
            posts.push(newPost)
            FileManager.write('data.json', posts)
        } else {
            this.errorPrinter.onError()
        }
        
    }

}