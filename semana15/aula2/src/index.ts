//import {readFileSync, writeFileSync} from 'fs'
import { Dish, Dessert, SaltyDish, Cashier, Chef, Employee, JSONManager } from './classes'

let parameters = process.argv.filter((item, i) => i > 3),
    restaurant = JSONManager.getObject('dataBase.json'),
    cashier = new Cashier("Tom", 3500),
    chef = new Chef("Chefe", 6300)

let dishes = restaurant.dishes

dishes = chef.removeDishFromMenu(dishes, "Açaí")

console.log(
    restaurant.dishes[0]
)




