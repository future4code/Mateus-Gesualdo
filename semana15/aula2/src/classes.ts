import { readFileSync, writeFileSync } from 'fs'

export abstract class JSONManager {
  static getObject = (path: string): any => JSON.parse(readFileSync(path).toString())

  static setObject = (path: string, content: any): void => { writeFileSync(path, JSON.stringify(content)) }
}

export abstract class Dish {
  protected name: string
  protected price: number;
  protected cost: number;
  protected ingredients: string[];
  protected timeToCook: number;

  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
  }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public abstract cook(): void;

  public getName = (): string => this.name

  public getPrice = (): number => this.price

}

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

export abstract class Employee {
  name: string
  salary: number
  static staff: number = 0

  constructor(
    name: string,
    salary: number
  ) {
    this.name = name
    this.salary = salary
    Employee.staff++
  }

  abstract sayJob(): string
}

export class Cashier extends Employee {
  constructor(
    name: string,
    salary: number
  ) {
    super(name, salary)
  }

  sayJob = () => "Cashier"

  calculateBill(dishes: (SaltyDish | Dessert)[], ) {
    let total = 0
    for (let dish of dishes) {
      total += dish.getPrice()
    }
    return total

  }
}

export class Manager extends Cashier {

}

export class Chef extends Employee {
  sayJob = (): string => "Chef"

  removeDishFromMenu(
    dishes: (SaltyDish | Dessert)[],
    dishToRemove: string
  ): (SaltyDish | Dessert)[] {
    return dishes.filter(dish => (dish.getName() !== dishToRemove))
  }

  addDishToMenu(
    dishes: (SaltyDish | Dessert)[],
    newDish: SaltyDish | Dessert
  ): (SaltyDish | Dessert)[] {
    return [...dishes, newDish]
  }
}