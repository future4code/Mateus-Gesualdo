import { Client } from './client'
import { Commerce } from './commerce'

export class CommercialClient extends Commerce implements Client {

    constructor(
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number,
        name: string,
        cnpj: string,
        cep: string,
    ) {
        super(name, cnpj, cep)
    }

    public calculateBill = (): number => Math.floor(0.7 * 0.75 * this.consumedEnergy)
}
