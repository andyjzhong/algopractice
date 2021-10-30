class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    unshift(value) {
        let newNode = new Node(value)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined

        let oldHead = this.head
        this.head = this.head.next
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return oldHead
    }

    pop() {
        if (this.length === 0) return null

        let current = this.head
        let newTail = this.head

        // Keep looping until current doesn't have a next.
        // If it doesn't have a next, it means it's the last one
        // So dont let it loop if it's the last one.
        while(current.next) {
            // 2nd to last node
            newTail = current
            // 2nd to last node's next AKA last
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current
    }

    get(index) {
        if (index > this.length || this.length === 0) return null
        let counter = 0
        let foundNode = this.head

        while (counter !== index) {
            foundNode = foundNode.next
            counter++
        }

        if (counter === index) {
            return foundNode
        } else {
            return null
        }
    }

    set(index, value) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.value = value
            return true
        } else {
            return false
        }
    }
}

let list = new LinkedList()
