import User from "../entities/user";

export default interface UserGateway {
    signup(user: User): void
}