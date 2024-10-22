// *
// !
// ?
// todo

// * ARRAYS
// const arr = [1, 2, 3, 'hello']
// arr.push(4)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// console.log(arr)
// for (let item of arr) {
//     console.log(item)
// }
// map, filter, reduce, concat, slice, splice
// insert / remove from end - O(1)
// inser / remove from beginning - O(n)
// access - O(1)
// search - O(n)
// push / pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)

// * OBJECTS
// const obj = {
//     name: 'bruce',
//     age: 22,
//     "key-three": true,
//     sayMyName: function () {
//         console.log('My name is', this.name);
//     }
// }
// obj.hobby = 'football'
// delete obj.hobby
// console.log(obj.name);
// console.log(obj["key-three"]);
// console.log(obj);
// obj.sayMyName()

// ? OBJECT METHODS
// object.keys() .values() .entries()
// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// object.keys() - O(n)
// object.values() - O(n)
// object.entries() - O(n)


// * LINKED LIST
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

    getSize() {
        return this.size
    }

    //! O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
           this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    //! O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log(list.isEmpty());
list.print()
console.log(list.getSize());
list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()

list.append(5)
list.print()

//? my demo
// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     append(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let pre = this.head
//             while (pre.next) {
//                 pre = pre.next
//             }
//             pre.next = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return console.log('type a index that existed')
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             let node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null || 'enter valid index'
//         }
//         let removeNode
//         if (index === 0) {
//             removeNode = this.head
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null || 'enter a valid index'
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while (prev.next ) {
//                 prev = prev.next
//             }
//         }

//     }

//     print() {
//         let cur = this.head
//         let val = ''
//         while (cur) {
//             val += cur.value + ' '
//             cur = cur.next
//         }
//         console.log(val)
//     }
// }

// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// // console.log(list.removeFrom())
// list.print()