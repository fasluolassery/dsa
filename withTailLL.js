class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() { return this.size === 0 }
    
    getSize() { return this.size }
    
    prepand(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
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
            this.tail = node
        } else {
            this.tail.next = node
            this.tail  = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) return console.log('list is empty')
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }

    removeFront() {
        if (this.isEmpty()) return console.log('list is empty');
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    

    removeEnd() {
        if (this.isEmpty()) return console.log('list is empty');
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
        }
        this.size--;
    }
    
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()