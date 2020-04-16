import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birthDate: string,
        private profilePicture: string
    ) { }

    getId = () => this.id
    getName = () => this.name
    getEmail = () => this.email
    getPassword = () => this.password
    getbirthDate = () => this.birthDate
    getProfilePicture = () => this.profilePicture

    static generateToken(id: string) {
        const jwtKey = process.env.JWT_KEY as string
        const token = jwt.sign(
            { id },
            jwtKey,
            { expiresIn: "24h" }
        )
        return token
    }

    static getTokenData(token: string) {
        const jwtKey = process.env.JWT_KEY as string
        const tokenData = jwt.verify(token, jwtKey) as { id: string }

        return tokenData
    }

    static async encryptPassword(password: string) {
        const rounds = 10
        const hashPassword = await bcrypt.hash(password, rounds)

        return hashPassword
    }

    static async checkPassword(password: string, hashPassword: string) {
        const passwordIsCorrect = await bcrypt.compare(password, hashPassword)

        return passwordIsCorrect
    }
}