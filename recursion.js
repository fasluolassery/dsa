//? ----------FACTORIAL----------

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

//? ----------FIBONACCI----------

// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
  
//? ----------REVERSE STRING----------

// function reverseString(str) {
//     if (str.length === 0) return "";
//     return reverseString(str.substring(1)) + str[0];
// }

//? ----------CHECK IF A STRING IS PALINDROME----------

// function isPalindrome(str) {
//     if (str.length <= 1) return true;
//     if (str[0] !== str[str.length - 1]) return false;
//     return isPalindrome(str.substring(1, str.length - 1));
//  }

//? ----------SUM OF ELEMENTS IN AN ARRAY----------

// function sumArray(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sumArray(arr.slice(1));
// }

//? ----------FIND MINIMUM IN AN ARRAY----------

// function findMin(arr, n) {
//     if (n === 1) return arr[0];
//     return Math.min(arr[n - 1], findMin(arr, n - 1));
// }

//? ----------PRINT ARRAY ELEMENTS----------

// function printArray(arr) {
//     if (arr.length === 0) return;
//     console.log(arr[0]);
//     printArray(arr.slice(1));
// }

//? ----------REVERSE AN ARRAY----------

// function reverseArray(arr) {
//     if (arr.length === 0) return [];
//     return reverseArray(arr.slice(1)).concat(arr[0]);
// }

//? ----------SUM OF DIGITS OF A NUMBER----------

// function sumOfDigits(n) {
//   if (n === 0) return 0;
//   return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

//? ----------BINARY SEARCH USING RECURSION----------

// function binarySearch(arr, target, low, high) {
//   if (low > high) return -1;
  
//   let mid = Math.floor((low + high) / 2);
  
//   if (arr[mid] === target) return mid;
  
//   if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  
//   return binarySearch(arr, target, mid + 1, high);
// }

//? ----------FIND THE MAXIMUM ELEMENT IN AN ARRAY----------

// function findMax(arr, n) {
//   if (n === 1) return arr[0];
//   return Math.max(arr[n - 1], findMax(arr, n - 1));
// }