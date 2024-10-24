class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) return 'list is empty'
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }

    deleteByValue(value) {
        if (this.isEmpty()) return 'list is empty'

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        } 

        let curr = this.head
        let prev = null

        while (curr) {
            if (curr.value === value) {
                prev.next = curr.next
                this.size--
                return
            } 
            prev = curr
            curr = curr.next
        }

        return 'value not found'
    }

    reverse() {
        let curr = this.head
        let prev = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    middle() {
        if (this.isEmpty()) return 'list is empty'
        let mid = Math.floor(this.size / 2)
        let curr = this.head
        for (let i = 0; i < mid; i++){
            curr = curr.next
        }
        console.log(curr.value)
    }

    midTwo() {
        if (this.isEmpty()) return 'list is empty'
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log( slow.value)
    }

    removeDups() {
        if (this.isEmpty()) return 'list is empty'
        let curr = this.head
        while (curr) {
            let a = curr.next
            let prev = curr
            while (a) {
                if (curr.value === a.value) {
                    prev.next = a.next
                } else {
                    prev = a
                }
                a = a.next
            }
            curr = curr.next
        }
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) return 'index is not valid'
        if (index === 0) this.prepend(value)
        else {
            let node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    insertAfter(newValue, value) {
        let node = new Node(newValue)
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                node.next = curr.next
                curr.next = node
                this.size++
                return 
            }
            curr = curr.next
        }
        return 'value not found'        
    }

    insertBefore(newValue, value) {
        let node = new Node(newValue)
        let curr = this.head
        let prev = curr
        while (curr) {
            if (curr.value === value) {
                node.next = prev.next
                prev.next = node
            }
            prev = curr
            curr = curr.next
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return console.log('invalid index')
        if (index === 0) this.head = this.head.next
        else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            curr.next = curr.next.next
        }
        this.size--
    }

    removeValue(value) {
        if (this.isEmpty()) return console.log('list is empty')
        if (this.head.value === value) return this.head = this.head.next
        else {
            let curr = this.head
            let prev = curr
            while (curr) {
                if (curr.value === value) {
                    prev.next = curr.next
                    this.size--
                    return
                }
                prev = curr
                curr = curr.next
            }
        }
        
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
// list.append(100)
// list.insertBefore(3, 4)
// list.insertAt(3,2)
// list.removeDups()
// list.middle()
// list.midTwo()
// list.insertAfter(3,2)
// list.insertAfter(5,4)
// list.insertAfter(1000,100)
list.print()