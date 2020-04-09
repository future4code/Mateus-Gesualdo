import UserDB from "../../../data/userDatabase";
import User from "../../entities/user";
import { v4 } from "uuid";
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

interface SingupUCInput {
    name: string,
    email: string,
    password: string,
    birthDate: string,
    profilePicture: string
}

export default class SignupUC {
    constructor(private database: UserDB) { }

    async execute(input: SingupUCInput) {

        const id = v4()

        const rounds = 10
        const hashPassword = await bcrypt.hash(input.password, rounds)

        await this.database.signup(new User(
            id,
            input.name,
            input.email,
            hashPassword,
            input.birthDate,
            input.profilePicture
        ))

        const jwtKey = process.env.JWT_KEY as string
        const token = jwt.sign(
            { id },
            jwtKey,
            { expiresIn: "1h" }
        )

        return {
            message: "Usuário criado!",
            token
        }
    }
}