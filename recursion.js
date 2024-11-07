//! fibonacci
// function fibonacci(n) {
//     if (n === 0) return 0
//     if (n === 1) return 1
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(6))

//! factorial
// function factorial(n) {
//     if (n <= 1) return 1
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

//! arraySum
// function sumArray(arr) {
//     if (arr.length === 0) return 0
//     return arr[0] + sumArray(arr.slice(1))
// }
// console.log(sumArray([1,2,3]))

//! stringReverse
// function reverseString(str) {
//     if (str.length === 0) return ""
//     return str.charAt(str.length - 1) + reverseString(str.slice(0,-1))
// }
// console.log(reverseString('hello'))

//! greatestCommonDeviserOfTwoNumbers
// function gcd(a, b) {
//     if (b === 0) return a
//     return gcd(b, a % b)
// }
// console.log(gcd(48,18))

//! integersInRange
// function integersInRange(start, end) {
//     if (start > end) return []
//     return [start].concat(integersInRange(start + 1, end))
// }
// console.log(integersInRange(1, 5))

//! isEven
// function isEven(n) {
//     if (n < 0) n = Math.abs(n)
//     if (n === 0) return true
//     if (n === 1) return false
//     else {
//         return isEven(n - 2)
//     }
// }
// console.log(isEven(4))

//! binerySearch
// function binarySearch(arr, target) {
//     return search(arr, target, 0, arr.length)
// }
// function search(arr, target, left, right) {
//     if (left > right) return -1
    
//     let mid = Math.floor((left + right) / 2)

//     if (arr[mid] === target) return mid
    
//     if (arr[mid] > target) {
//         return search(arr, target, left, mid - 1)
//     } else {
//         return search(arr, target, mid + 1, right)
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(binarySearch(arr, 6))

//! isPalindrome
// function isPalindrome(str, left = 0, right = str.length - 1) {
//     // Base case: pointers cross or meet in the middle
//     if (left >= right) {
//         return true;
//     }
//     // Check if characters at current pointers are the same
//     if (str[left] !== str[right]) {
//         return false;
//     }
//     // Recursive call to check the next characters
//     return isPalindrome(str, left + 1, right - 1);
// }

//! countVowels
// function countVowels(str, index = 0) {
//     // Base case: reach the end of the string
//     if (index === str.length) {
//         return 0;
//     }
//     // Check if the current character is a vowel
//     const vowels = "aeiouAEIOU";
//     let count = vowels.includes(str[index]) ? 1 : 0;
//     // Recursive call, moving to the next character
//     return count + countVowels(str, index + 1);
// }


//! printEven
// function printEven(n) {
//     // Base case: stop at 0 or a negative number
//     if (n < 0) {
//         return;
//     }
//     // Print if n is even
//     if (n % 2 === 0) {
//         console.log(n);
//     }
//     // Recursive call with n - 1
//     printEven(n - 1);
// }
