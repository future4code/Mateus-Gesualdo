import MainDB from "./MainDatabase";
import UserGateway from "../business/gateways/userGateway";
import User from "../business/entities/user";

export default class UserDB extends MainDB implements UserGateway {

    async signup(newUser: User) {
        try {
            await this.connection.raw(
                `INSERT INTO future_tube_users values(
                "${newUser.getId()}",
                "${newUser.getName()}",
                "${newUser.getEmail()}",                               
                "${newUser.getbirthDate()}",
                "${newUser.getPassword()}",
                "${newUser.getProfilePicture()}"
            )`
            )
        } catch (err) {
            throw new Error(err.sqlMessage)
        }
    }
}