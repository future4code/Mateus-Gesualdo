import {PostReaderInterface } from '../interfaces/PostReaderInterface'
import { FileManager } from '../classes/FileManager'
import {Post} from './Post'

export class PostReader implements PostReaderInterface {
    getPosts = (): Post[] => FileManager.read('data.json')
}