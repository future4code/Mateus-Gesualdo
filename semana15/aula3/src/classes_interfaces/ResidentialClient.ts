import { Client } from './client'
import { Residence } from './residence'

export class ResidentialClient extends Residence implements Client {

    constructor(
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number,
        name: string,
        cpf: string,
        cep: string,
    ) {
        super(name, cpf, cep)
    }

    public calculateBill = (): number => Math.floor(0.75 * this.consumedEnergy)
}

