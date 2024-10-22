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

    prepend(value) {
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.head === null) {
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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return 
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return 'Invalid index'; // Better error handling
        }
        let rmNode;
        if (index === 0) {
            rmNode = this.head;
            this.head = rmNode.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            rmNode = prev.next;
            prev.next = rmNode.next;
        }
        this.size--;
        return rmNode.value; // Return the value of the removed node
    }

    removeValue(value) {
        if (this.head === null) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.head === null) {
           return -1
        }
        let i = 0
        let current = this.head
        while (current) {
            if (current.value === value) {
                return i
            }
            current = current.next
            i++
        }
        return -1
   }
    
    
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    toArray() {
        let arr = []
        let curr = this.head
        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }

    fromArray(arr) {
        for (let i of arr) {
            this.append(i)
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        if (index === 0) {
            return this.head.value
        } else {
            let curr = this.head
            for (let i = 0; i < index ; i++){
                curr = curr.next
            }
            return curr.value
        }
    }

    clear() {
        this.head = null
        return 'success'
    }

    printList() {
        let curr = this.head
        let val = ''
        while (curr) {
            val += curr.value + ' -> '
            curr = curr.next
        }
        console.log(val)
    }

    size() {
        return this.size
    }

    contains(value) {
        if (this.head.value === value) {
            return value
        } else {
            let curr = this.head
            while (curr.next && curr.next.value !== value) {
                curr = curr.next
            }
            return curr.value
        }
    }

    getLast() {
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        return curr.value
    }
}

function factorial(num){
    if (num < 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

// console.log(factorial(5))
// console.log(factorial())

function fibnocci(n) {
    if (num <= 0) {
        return 0
    } else {
        return fibnocci(n-1) + fibnocci(n-2)
    }
}

function sumArray(arr) {
    
}

let arr = [1, 2, 3, 4, 5]

sumArray(arr)

var restoreString = function (s, ind) {
    let b = []
    for (let i = 0; i < ind.length; i++){
        for (let j = 0; j < ind.length; j++){
            if (i == ind[j]) {
                b.push(s[j])
            }
        }
    }
    return b.join('')
};
