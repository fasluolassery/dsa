class Node{
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    isempty() { return this.size === 0 }

    prepand(value) {
        let node = new Node(value)
        if (this.isempty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.isempty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
            node.prev = curr
        }
        this.size++
    }

    print() {
        if (this.isempty()) return console.log('list is empty')
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size) return console.log('invalid index')
        if (index === 0) {
            this.prepand(value)
            return
        } else {
            let node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            node.next = curr.next
            if (curr.next) {
                curr.next.prev = node
            }
            curr.next = node
            node.prev = curr
            this.size++
        }
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()