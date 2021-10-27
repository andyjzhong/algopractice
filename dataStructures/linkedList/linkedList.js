class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        // Edge case: if list is empty, make sure both head and tail is set to new value.
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        // Edge case: if list is empty, nothing to pop.
        if (this.length === 0) return undefined

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        // Edge case: if list is newly empty, make sure to update head AND tail
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current
    }

    shift() {
        if(this.length === 0) return undefined

        let oldHead = this.head
        this.head = oldHead.next
        this.length--

        // Edge case: if list is newly empty, make sure to update head AND tail
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)

        // Edge case: if list is empty, make sure both head and tail is set to new value.
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
}

let list = new LinkedList()

list.push("3")
list.push("4")
list.push("5")
list.pop()
list.shift()
list.unshift("10")
