import { LinkedList } from './exercicio1'

export class Stack {
    public nodes: LinkedList = new LinkedList()

    public isEmpty = (): boolean => this.nodes.start === null

    public push(value: any): void {
        this.nodes.addToTail(value)
    }

    public pop(): void {
        if (this.nodes.start) {
            let currentNode = this.nodes.start

            while (currentNode.next?.next) currentNode = currentNode.next

            currentNode.next = null
        }
    }

    public print(): void {
        this.nodes.printValues()
    }
}