import { Client } from './client'

export class ClientManager {
    static clients: Client[] = []

    static register(client: Client): void {
        ClientManager.clients.push(client)
    }

    static getClientsQuantity = (): number => ClientManager.clients.length

    static printClientBills(): void {
        ClientManager.clients.forEach(
            (client, i) => console.log(client.clientNumber, '-', client.clientName, '-', client.calculateBill())
        )
    }

    static calculateAllIncome = (): number => {
        let total = 0
        ClientManager.clients.forEach(
            client => total += client.calculateBill()
        )
        return total
    }
}