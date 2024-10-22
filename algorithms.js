// arrays dsa

// inserting elements
// let fruits = ['apple', 'banana', 'orange']
// fruits.push('hai')
// fruits.splice(4,0,'hello')
// console.log(fruits)

// deleting elements
// let fruits = ['apple', 'banana', 'orange']
// fruits.pop()
// fruits.splice(1,1)
// console.log(fruits)

// traversing array
// let fruits = ['apple', 'banana', 'orange']
// for (let fruit of fruits) {
//     console.log(fruit)
// }

// updating elements
// let fruits = ['apple', 'banana', 'orange']
// fruits[2] = 'avocado'
// console.log(fruits)

// find largest element
// let grades = [85, 92, 78, 90, 88];
// if (grades.length === 0) return null
//  let large = grades[0]
// for (let num of grades) {
//     if (num > large) {
//         large = num
//     }
// }
// console.log(large)

// find average
// let grades = [85, 92, 78, 90, 88];
// let sum = 0
// for (let num of grades) {
//     sum += num
// }
// console.log(sum/grades.length)

// reverse array
// function reverseArray(arr) {
//     let start = 0
//     let end = arr.length - 1
//     while (start < end) {
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
//     return arr
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers))

// twoD array
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// matrix[1][1] = 55;
// console.log(matrix[1][1])

// threeD array
// let threeD = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ];
// threeD[1][0][0] = 10
// console.log(threeD[0][1][0])
// console.log(threeD)

// static array
// let staticArray = [1, 2, 3, 4, 5];
// Object.seal(staticArray)
// Object.freeze(staticArray)
// staticArray[0] = 10
// staticArray.push(3)
// console.log(staticArray)

// dynamic array
// let dynamicArray = [1, 2, 3];
// dynamicArray.push(4);
// dynamicArray.unshift(0);
// console.log(dynamicArray);
// dynamicArray.pop();
// dynamicArray.shift();
// console.log(dynamicArray);

//? dsa code evelution

// fibonacci
function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++){
        fib[i]  = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
// Big-O = O(n)

// factorial of a number
function factorial(n) {
    let res = 1
    for (let i = 2; i <= n; i++){
        res = res * i
    }
    return res
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
// Big-O = O(n)

// prime number
function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++){
        if (n % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))
// Big-O = O(n)

// function isPrimeSqrt(n) {
//     if (n < 2) return false
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrimeSqrt(1))
// console.log(isPrimeSqrt(5))
// console.log(isPrimeSqrt(4))
// Big-O = O(sqrt(n))

// power of two
// function isPo2(n) {
//     if (n < 1) return false
//     while (n > 1) {
//         if (n % 2 !== 0) return false
//         n = n / 2
//     }
//     return true
// }
// console.log(isPo2(1));
// console.log(isPo2(2));
// console.log(isPo2(5));
// Big-O = O(logn)

// power of two bitwise
// function isPo2Bit(n) {
//     if (n < 1) return false
//     return (n & (n-1)) === 0
// }
// console.log(isPo2Bit(1));
// console.log(isPo2Bit(2));
// console.log(isPo2Bit(5));
// Big-O = O(1)


// recursion fibonacci
// function recursion(n) {
//     if (n < 2) {
//         return n
//     }
//     return recursion(n - 1) + recursion(n - 2)
// }
// console.log(recursion(7))
// Big-O = O(2^n)

// function recursion(n) {
//     if (n === 0) return 1
//     return n * recursion(n-1)
// }
// console.log(recursion(0));
// console.log(recursion(1));
// console.log(recursion(5));
// Big-O = O(n)

// leanier search
// function find(arr, t) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == t) {
//             return i
//         }
//     }
//     return -1
// }
// let arr = [-5, 2, 10, 4, 6]
// console.log(find(arr, 10))
// console.log(find(arr, 6))
// console.log(find(arr, 20))
// Big-O = O(n)

// Binery search
// let arr = [-5, 2, 4, 6, 10]
// function binerySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     console.log('left:', left);
//     console.log('right:',right);
//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2)
//         console.log('middle:', middle);
//         if (target === arr[middle]) return middle
//         if (target < arr[middle]) {
//             right = middle - 1
//             console.log('right:', right);
//             console.log('left:', left);
//         } else {
//             left = middle + 1
//             console.log('left:', left);
//             console.log('right:', right);
//         }
//     }
//     return -1
// }
// console.log(binerySearch(arr,6))
// console.log(binerySearch(arr,10))
// console.log(binerySearch(arr,20))

// let arr = [-5, 2, 4, 6, 10]
// function binerySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2)
//         if (target === arr[middle]) return middle
//         if (target < arr[middle]) {
//             right = middle - 1
//         } else {
//             left = middle + 1
//         }
//     }
//     return -1
// }
// console.log(binerySearch(arr, 10));

// recursive binery search
// let arr = [-5, 2, 4, 6, 10]
// function binery(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }
// function search(arr, target, left, right) {
//     if (left > right) {
//         return -1
//     }
//     let middle = Math.floor((right + left) / 2)
//     if (target === arr[middle]) {
//         return middle
//     }
//     if (target < arr[middle]) {
//         return search(arr, target, left, middle - 1)
//     } else {
//         return search(arr, target, middle + 1, right)
//     }
// }
// console.log(binery(arr, 10))
// console.log(binery(arr, 6))
// console.log(binery(arr, 20))
// Big-O = O(logn)