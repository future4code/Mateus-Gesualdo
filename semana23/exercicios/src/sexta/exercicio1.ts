export class ListNode {
    constructor(
        public value: any,
        public next: ListNode | null
    ) { }
}

export class LinkedList {
    constructor(
        public start: ListNode | null = null
    ) { }

    public addToTail(value: any) {
        if (!this.start) {
            this.start = new ListNode(value, null)
        } else {
            let currentNode = this.start

            while (currentNode.next) currentNode = currentNode.next

            currentNode.next = new ListNode(value, null)
        }
    }

    public printValues() {
        if (!this.start) {
            console.log(null)
        } else {
            let currentNode: ListNode | null = this.start

            while (currentNode) {
                console.log(currentNode.value)
                currentNode = currentNode?.next
            }
        }

    }
}