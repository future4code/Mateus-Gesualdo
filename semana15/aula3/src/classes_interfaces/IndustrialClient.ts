import { Client } from './client'
import { Industry } from './industry'

export class IndustrialClient extends Industry implements Client {

    constructor(
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number,
        industryName: string,
        industryNumber: string,
        cep: string,
    ) {
        super(industryName, industryNumber, cep)
    }

    public calculateBill = (): number => Math.floor(10000 + 0.45 * this.consumedEnergy)
}
