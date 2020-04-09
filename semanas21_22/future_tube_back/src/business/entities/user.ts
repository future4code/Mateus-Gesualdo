export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birthDate: string,
        private profilePicture: string
    ){}

    getId = () => this.id
    getName = () => this.name
    getEmail = () => this.email
    getPassword = () => this.password
    getbirthDate = () => this.birthDate
    getProfilePicture = () => this.profilePicture
}