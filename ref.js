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

    isEmpty() { return this.size === 0 }
    
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
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
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

    isPalindrome() {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let curr = slow
        let prev = null

        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        
        let fist = this.head
        let sec = prev

        while (sec) {
            if (fist.value !== sec.value) return false
            fist = fist.next
            sec = sec.next
        }

        return true
    }

    removeDups() {
        let curr = this.head
        while (curr) {
            let runner = curr
            while (runner.next) {
                if (runner.next.value === curr.value) {
                    runner.next = runner.next.next
                } else {
                    runner = runner.next
                }
            }
            curr = curr.next
        }
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)

list.print()