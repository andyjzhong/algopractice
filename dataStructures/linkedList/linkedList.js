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

    get(index) {
        if (index < 0 || index >= this.length) return null

        let count = 0
        let current = this.head

        while (count !== index) {
            current = current.next
            count++
        }

        return current
    }

    set(index, val) {
        let foundNode = this.get(index)

        if(foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }

    insert(index, value) {
       if (index < 0 || index > this.length) return false
       if (index === 0) !!this.unshift(value)
       if (index === this.length - 1) !!this.push(value)

       let newNode = new Node(value)
       let leftNode = this.get(index - 1)
       let rightNode = this.get(index)
       leftNode.next = newNode
       newNode.next = rightNode
       this.length++
       return true
   }
}

let list = new LinkedList()

// list.push("3")
// list.push("4")
// list.push("5")
// list.pop()
// list.shift()
// list.unshift("10")
