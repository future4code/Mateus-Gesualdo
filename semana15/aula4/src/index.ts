import { LowerCasePostCreator } from './classes/LowerCasePostCreator'
import { PostReader } from './classes/PostReader'


const newPost = new LowerCasePostCreator('mateus', '%Hello, world!')

// Descomente a linha abaixo para testar a criação de posts
// newPost.create()

const posts = new PostReader().getPosts()

console.log(posts)