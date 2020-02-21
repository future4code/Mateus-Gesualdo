import {InterfaceMembro} from '../IterfaceMembro'

export abstract class Membro implements InterfaceMembro {
    constructor(
        public nome: string,
        public email: string,
        public dataNascimento: string
    ){}
}