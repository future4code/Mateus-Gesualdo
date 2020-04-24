export class Queue {
    public nodes: any[] = []

    public isEmpty = (): boolean => this.nodes.length === 0

    public enqueue(value: any): void {
        this.nodes.push(value)
    }

    public dequeue(): void {
        this.nodes.shift()
    }

    public print(): void {
        this.nodes.forEach(
            value => console.log(value)
        )
    }
}