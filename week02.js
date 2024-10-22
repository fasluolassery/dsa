function f(n = 5) {
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum = sum + i
    }
    return sum
}

// console.log(f()) //Time complexity //? O(n) Linear

function f2(n = 5) {
    sum = n * (n + 1) / 2
    return sum
}

// console.log(f2()) //Time complexity //? O(1) Constant


let a = new Array(10)
a[0] = 'faslu'
// console.log(a)


function target(arr, target) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
    return null
}

let ans = target([6, 5, 7, 9, 4, 0, 2], 10)
// console.log(ans)

function alg(arr, target) {
    let b = []
    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        let match = target - num
        if (b.includes(match)) {
            return [match, num]
        } else {
            b.push(num)
        }
    }
}

let re = alg([6, 5, 7, 9, 4, 0, 2], 10)
// console.log(re)

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

    
}