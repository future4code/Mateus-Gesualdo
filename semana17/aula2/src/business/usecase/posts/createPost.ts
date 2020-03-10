import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}


/*

  EXERCÍCIOS DE LEITURA DE CÓDIGO


  i - É possíveis criar posts normais ou de evento, 
  de acordo com o enum PostType. 

  ii - A criação de posts valida o tipo de post informado. 
  Em caso de erro, é retornada a mensagem "Invalid Type".

  iii - A classe baseDataBase guarda as informações de conexão 
  com o banco de dados, que serão utilizadas por outras classes 
  para consultas e alterações no banco.
  É uma classe abstrata por servir apenas para ser extendida.

  iv - A linha em questão instancia um objeto da classe CreatePostUC.

  v - A nova instância da classe Post é necessária 
  pois serve de argumento para o método createPost().

  vi - O input da classe CreatePostUC vem do corpo da requisição de criar posts, 
  devendo seguir a tipagem da interface CreatePostUCInput.

  vii - A função createPost da classe PostDB recebe seu argumento 
  da nova instância da classe Post criada na classe CreatePostUC.

  viii - O ternário da função createPost serve para conferir 
  se foi atribuída uma imagem ao post. 
  Caso essa ou alguma verificação similar não existisse, 
  a inclusão da imagem não poderia ser opcional.

*/