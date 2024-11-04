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
        if (this.isEmpty()) return console.log('list is emtpy')
        else {
            let curr = this.head
            while (curr) {
                console.log(curr.value)
                curr = curr.next
            }
        }
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size) return console.log('invalid index')
        if (index === 0) return this.prepend(value)
        else {
            let node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }

    insertAfter(oldValue, newValue) {
        if (this.isEmpty()) return console.log('list is empty')
        else {
            let node = new Node(newValue)
            let curr = this.head
            while (curr) {
                if (curr.value === oldValue) {
                    node.next = curr.next
                    curr.next = node
                    this.size++
                    return 
                }   
                curr = curr.next
            }
        }
        return console.log('value not found')
    }

    insertBefore(oldValue, newValue) {
        if (this.isEmpty()) return console.log('list is emtpy')
        let node = new Node(newValue)
        if (this.head.value === oldValue) {
            node.next = this.head
            this.head = node
            this.size++
            return
        } else {
            let curr = this.head
            while (curr) {
                if (curr.next.value === oldValue) {
                    node.next = curr.next
                    curr.next = node
                    this.size++
                    return
                }
                curr = curr.next
            }
        }
        return console.log('value not found')
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size || index === undefined ) return console.log('invalid index')
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
        if (this.isEmpty()) return console.log('list is emtpy')

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        }
        
        let curr = this.head
        while (curr.next) {
            if (curr.next.value === value) {
                curr.next = curr.next.next
                this.size--
                return
            }
            curr = curr.next
        }

        return console.log('value not found')
    }

    removeValueTwo(value) {
        if (this.isEmpty()) return console.log('list is emtpy')
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        } else {
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
        return console.log('value not found')
    }

    removeMiddle() {
        if (this.isEmpty()) return console.log('list is emtpy')
        else {
            let curr = this.head
            let mid = Math.floor(this.size / 2)
            for (let i = 0; i < mid -1; i++){
                curr = curr.next                
            }
            curr.next = curr.next.next
        }
    }

    removeMiddleTwo() {
        if (this.isEmpty()) return console.log('list is emtpy')
        else {
            let slow = this.head
            let fast = this.head
            let prev 
            while (fast && fast.next) {
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
            prev.next = prev.next.next
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) return console.log('invalid inex')
        if (index === 0) return console.log(this.head.value)
        else { 
            let curr = this.head
            for (let i = 0; i < index; i++){
                curr = curr.next
            }
            return console.log(curr.value)
        }
    }

    set(index, value) {
        if (index < 0 || index >= this.size || index === undefined) return console.log('invalid index')
        if (index === 0) {
            this.head.value = value
        } else {
            let curr = this.head
            for (let i = 0; i < index; i++){
                curr = curr.next
            }
            curr.value = value
        }
    }

    reverse() {
        if (this.isEmpty()) return console.log('list is empty')
        else {
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
    }

    find(value) {
        if (this.isEmpty()) return console.log('list is empty')
        let curr = this.head
        for (let i = 0; curr; i++){
            if (curr.value === value) {
                return console.log(i)
            }
            curr = curr.next
        }

        return console.log('value not found')
    }

    contains(value) {
        if (this.isEmpty()) return console.log('list is emtpy')
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return console.log(true)
            }
            curr = curr.next
        }
        return console.log(false)
    }

    clear() { this.head = null; this.size = 0 }

    toArray() {
        if (this.isEmpty()) return console.log('list is empty')
        let arr = []
        
        let curr = this.head
        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        return console.log(arr)
    }

    getSize() { return console.log(this.size) }
    
    
}

let list = new LinkedList()