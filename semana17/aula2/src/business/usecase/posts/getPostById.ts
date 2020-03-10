import { PostDB } from "../../../data/postDataBase";
import { PostType } from "../../entities/post";
export class GetPostByIdUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByIdUCInput): Promise<void> {
   
  }
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
