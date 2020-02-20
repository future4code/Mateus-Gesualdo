import { Post } from '../classes/Post'

export interface PostReaderInterface {
    getPosts(): Post[]
}