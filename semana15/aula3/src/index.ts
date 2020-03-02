import { ResidentialClient } from './classes_interfaces/ResidentialClient'
import { CommercialClient } from './classes_interfaces/CommercialClient'
import { IndustrialClient } from './classes_interfaces/IndustrialClient'
import { ClientManager } from './classes_interfaces/ClientManager'

const clients = [
    new ResidentialClient("edifício Marte", 2, 360, 'Mateus', '123.456.789.01', '33333-333'),
    new ResidentialClient("condomínio Vênus", 73, 1000, 'Valquíria', '123.123.789.01', '33333-000'),
    new CommercialClient("Future Eats", 24, 7200, 'Guilherme', '123.456.119.01', '30033-333'),
    new CommercialClient("Whats4", 37, 10000, 'Mariana', '100.123.789.01', '99333-000'),
    new IndustrialClient("Ford", 24, 7200, 'Henry ', '123.456.119.01', '30033-333'),
    new IndustrialClient("Ferrari", 38, 100000, 'Enzo', '100.123.789.01', '99333-000')
]

clients.forEach(
    client => ClientManager.register(client)
)

//ClientManager.printClientBills()

console.log(
    ClientManager.calculateAllIncome()
)


