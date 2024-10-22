///////////////////---------------Singly Linked list-------------------/////////////

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     //---------------Is empty method--------------//
//     isEmpty(){
//         return this.size === 0
//     }

//     //------------------ to get the size----------------//

//     getSize(){
//         return this.size
//     }

// //--------------------prepend--- O(1)--------------//

//     prepend(value){
//         const node = new Node(value);
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     //-------------------append   O(n)-----------------------//

//     append(value){
//         const node = new Node(value);
//         if(!this.head){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++;
//     }

//     //---------------insert index------------------------//

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             let node = new Node(value)
//             let curr = this.head
//             for(let i= 0 ;i < index-1 ;i++){
//                 curr = curr.next
//             }
//             node.next = curr.next
//             curr.next = node 
//            this.size++;
//         }
//     }

//     //-----------------insert after----------------------//

//      insertAfter(x,value){
//       let node = new Node(value)
//         let curr = this.head
//         while(curr && curr.value !== x){
//           curr = curr.next
//         }
//         if(curr){
//           node.next = curr.next
//           curr.next = node
//           this.size++;
//         }
//      }

//      //------------------insert before-------------------//

//      insertBefore(x,value){
//       let node = new Node(value)
//       let curr = this.head
//       while(curr.next && curr.next.value !== x){
//         curr = curr.next
//       }
//       if(curr.next){
//         node.next = curr.next 
//         curr.next = node
//         this.size++;
//       }
//      }

//     //-------------------remove index --------------------//

//     removeFrom(index){
//         if(index < 0 || index > this.size){
//             return null
//         }
//         let removeNode 
//         if(index === 0 ){
//             removeNode = this.head
//             this.head = this.head.next
//             this.size--;
//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = prev.next.next
//             this.size--
//         }
//         return removeNode.value;
        

//     }

//     //-------------------remove Value----------------------//

//     removeValue(value){
//         if(!this.head){
//             return null
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--;
//             return value
//         }else{
//             let prev = this.head
//             while(prev.next && prev.next.value !== value){
//                 prev = prev.next
//             }
//             if(prev.next ){
//                 prev.next = prev.next.next
//                 this.size--;
//             return value
//             }
//            return null
            
//         }
        
//     }

   // removeMiddle(){
    //         if(!this.head){
    //             return -1
    //         }
    //         let curr = this.head
    //        let size = Math.floor(this.size/2)
    //        let removeValue 
    //         for(let i =0;i<size-1;i++){
    //             curr = curr.next
    //         }
    //         removeValue = curr.next.value
    //         curr.next = curr.next.next
    //         this.size--;
    //         return removeValue
    //     }

 
//     //--------------------search by value---------------------//

//     search(value){
//         if(!this.head){
//             return -1
//         }
//         let i = 0;
//         let curr = this.head;
//         while(curr){
//             if(curr.value === value){
//                 return i
//             }
//             curr = curr.next
//             i++;
//         }
//         return -1;
//     }

// //--------------------------search by index-------------------//

//     searchIndex(index){
//       if(!this.head){
//         return false
//       }else{
//         let curr = this.head
//         let count = 0
//         while(curr){
//           if(count === index){
//             return curr.value
//           }
//           curr = curr.next
//           count++
//         }
//         return -1;
//       }
//     }

// //---------------------------reverse -------------------//

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next 
//         }
//         this.head = prev
//     }


// //---------------------remove duplicate elements-----------------//

// removeDuplicates(){
//   let curr = this.head
//   while(curr && curr.next){
//       if(curr.value === curr.next.value){
//           curr.next = curr.next.next
//       }else{
//           curr = curr.next
//       }
//   }
// }

//    //-------------------------find Middle----------------------//

//    findMiddle(){
//     if(!this.head){
//       return false
//     }else{
//       let slow = this.head
//       let fast = this.head
//       while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next
//       }
//       return slow.value
//     }
//    }


//     //----------------print--------------------------//
    
//     print(){
        
//         if(!this.head){
//             console.log('The list is empty');
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }


// }

// const list = new linkedList();
// console.log("Is it empty?:",list.isEmpty());
// console.log('Size:',list.getSize());
// list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
// list.insert(20,2)
// console.log(list.search(20))
// list.reverse()
// list.removeDuplicates()
// console.log(list.removeMiddle());
// list.insertAfter(20,40)
// list.insertBefore(40,50)
// console.log(list.searchIndex(2))
// console.log(list.findMiddle());
// list.print()

////////////////////////------------------with tail------------------------/////////////////

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }


//   isEmpty(){
//     return this.size ===0
//   }

//   getSize(){
//     return this.size 
//   }

//   prepend(value){
//     let node = new Node(value)
//     if(!this.head){
//         this.head = node
//         this.tail = node

//     }else{
//         node.next = this.head
//         this.head = node
//     }
//     this.size++;
//   }

//   append(value){
//     let node = new Node(value)
//     if(!this.head){
//         this.head = node
//         this.tail = node
//     }else{
//         this.tail.next = node
//         this.tail = node
//     }
//     this.size++;
//   }

//   print(){
//     let curr = this.head
//     let listValues = ''
//     if(!this.head){
//         console.log('The list is empty');
//     }else{

//         while(curr){
//             listValues += ` ${curr.value}`
//             curr = curr.next
//         }
//         console.log(listValues);
//     }

//   }

//   removeFront(){
//     if(!this.head){
//         return null
//     }

//     let value = this.head.value
//     this.head = this.head.next
//     return value
//   }

//   removeEnd(){
//     if(!this.head){
//         return null
//     }

//     let curr = this.head
//     while(curr.next !== this.tail){
       
//         curr = curr.next
//     }
//     let value = curr.next.value
//     curr.next = null
//     this.tail = curr
//     return value
//   }

// }


// const list = new linkedList()
// list.prepend(10)
// list.prepend(20)

// list.append(30)
// list.append(40)

// console.log(list.removeEnd());



// list.print()


//////////////////////// //--------------------Doubly linkedList-------------------//////////////

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//     this.prev = null
//   }
// }

// class doublylinkedList {
//   constructor(){
//     this.head = null
//     this.size = 0
//   }

//   //---------------------prepend-----------------------//

//   prepend(value){
//     let node = new Node(value)

//     if(!this.head){
//       this.head = node
//       this.size++;
//     }else{
//       node.next = this.head
//       this.head.prev = node
//       this.head = node
//       this.size++;
//     } 
//   }

//   //---------------------------append------------------------//

//   append(value){
//     let node = new Node( value)

//     if(!this.head){
//       this.head = node
//       this.size++;
//      }else{
//       let curr =this.head
//       while(curr.next){
//         curr = curr.next
//       }
//       curr.next = node
//       node.prev = curr
//     }
//   }

//   //-------------------insert index------------------------------//

//   insertIndex(value,index){
//     if(index < 0 || index > this.size){
//       return
//     }
//     if(index === 0 ){
//       this.prepend(value);
//     }else{
//       let node = new Node(value)

//       let curr = this.head
//       for(let i = 0;i < index -1;i++){
//         curr = curr.next
//       }
//       if(curr){
//         node.next = curr.next
//         if(curr.next){
//           curr.next.prev = node

//         }
//         curr.next = node
//         node.prev = curr
//       }
//     }
    

//   }


//   print(){
//     let curr = this.head
//     let listValues = ''
//     if(!this.head){
//       console.log('The list is empty');
//     }else{
//       while(curr){
//         listValues += ` ${curr.value}`
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }


// }

// const list = new doublylinkedList()
// list.prepend(10);
// list.prepend(20)

// list.append(30)
// list.append(40)

// list.insertIndex(50,2)

// list.print()

// /////////////////------------------Circular SinglylinkedList------------/////////
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class CircularSinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         let node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//         this.size++;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//         this.size++;
//     }

//     removeFront() {
//         if (!this.head) {
//             return null;
//         }

//         let value = this.head.value;
//         if (this.head === this.tail) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = this.head.next;
//             this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//         }
//         this.size--;
//         return value;
//     }

//     removeEnd() {
//         if (!this.head) {
//             return null;
//         }

//         let value = this.tail.value;
//         if (this.head === this.tail) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let curr = this.head;
//             while (curr.next !== this.tail) {
//                 curr = curr.next;
//             }
//             curr.next = this.head;
//             this.tail = curr;
//         }
//         this.size--;
//         return value;
//     }

//     insertIndex(value, index) {
//         if (index < 0 || index > this.size) {
//             return null;
//         }
//         let node = new Node(value);

//         if (index === 0) {
//             node.next = this.head;
//             this.head = node;
//             this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//             this.size++;
//         } else {
//             let curr = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//             this.size++;
//         }
//     }

//     insertAfter(value, x) {
//         let node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//             node.next = this.head; // Update tail's next to point to head for circular linkage
//             this.size++;
//             return;
//         }

//         let curr = this.head;
//         while (curr && curr.value !== x) {
//             curr = curr.next;
//         }
//         if (curr) {
//             node.next = curr.next;
//             curr.next = node;
//             if (curr === this.tail) {
//                 this.tail = node; // Update tail if inserting after the current tail
//             }
//             this.size++;
//         }
//     }

//     insertBefore(value, x) {
//         let node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//             node.next = this.head; // Update tail's next to point to head for circular linkage
//             this.size++;
//             return;
//         }

//         if (this.head.value === x) {
//             node.next = this.head;
//             this.head = node;
//             this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//             this.size++;
//             return;
//         }

//         let curr = this.head;
//         while (curr.next && curr.next.value !== x) {
//             curr = curr.next;
//         }
//         if (curr.next) {
//             node.next = curr.next;
//             curr.next = node;
//             this.size++;
//         }
//     }

//     removeIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }

//         let value;
//         if (index === 0) {
//             value = this.head.value;
//             if (this.head === this.tail) {
//                 this.head = null;
//                 this.tail = null;
//             } else {
//                 this.head = this.head.next;
//                 this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//             }
//         } else {
//             let curr = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             value = curr.next.value;
//             curr.next = curr.next.next;
//             if (curr.next === this.head) {
//                 this.tail = curr; // Update tail if removing the previous tail
//             }
//         }
//         this.size--;
//         return value;
//     }

//     removeValue(value) {
//         if (!this.head) {
//             return null;
//         }

//         let valueToRemove;
//         if (this.head.value === value) {
//             valueToRemove = this.head.value;
//             if (this.head === this.tail) {
//                 this.head = null;
//                 this.tail = null;
//             } else {
//                 this.head = this.head.next;
//                 this.tail.next = this.head; // Update tail's next to point to head for circular linkage
//             }
//             this.size--;
//             return valueToRemove;
//         }

//         let curr = this.head;
//         while (curr.next && curr.next.value !== value) {
//             curr = curr.next;
//         }
//         if (curr.next) {
//             valueToRemove = curr.next.value;
//             curr.next = curr.next.next;
//             if (curr.next === this.head) {
//                 this.tail = curr; // Update tail if removing the previous tail
//             }
//             this.size--;
//             return valueToRemove;
//         }
//         return null;
//     }

//     searchValue(value) {
//         if (!this.head) {
//             return -1;
//         }

//         let i = 0;
//         let curr = this.head;
//         do {
//             if (curr.value === value) {
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         } while (curr !== this.head);

//         return -1;
//     }

//     searchIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return -1;
//         }

//         let i = 0;
//         let curr = this.head;
//         do {
//             if (i === index) {
//                 return curr.value;
//             }
//             curr = curr.next;
//             i++;
//         } while (curr !== this.head);

//         return -1;
//     }

//     reverse() {
//         if (!this.head) {
//             return;
//         }

//         let prev = this.tail;
//         let curr = this.head;
//         let next = null;

//         do {
//             next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         } while (curr !== this.head);

//         this.head = prev;
//         this.tail = curr;
//     }

//     removeDuplicates() {
//         if (!this.head || this.head === this.tail) {
//             return;
//         }

//         let curr = this.head;
//         let prev = null;
//         let seenValues = {};

//         do {
//             if (seenValues[curr.value]) {
//                 prev.next = curr.next;
//             } else {
//                 seenValues[curr.value] = true;
//                 prev = curr;
//             }
//             curr = curr.next;
//         } while (curr !== this.head);
//     }

//     findMiddle() {
//         if (!this.head) {
//             return null;
//         }

//         let slow = this.head;
//         let fast = this.head;

//         while (fast && fast.next && fast.next !== this.head) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         return slow.value;
//     }

//     print() {
//         if (!this.head) {
//             console.log('The list is empty');
//             return;
//         }

//         let curr = this.head;
//         let listValues = '';

//         do {
//             listValues += ` ${curr.value}`;
//             curr = curr.next;
//         } while (curr !== this.head);

//         console.log(listValues)
//     }
// }




/////////////////---------------Recursion---------------///////////////

//-----------------------recursive fibonacci------------------//

// function recursiveFibonacci (n){
//   if(n<2){
//     return n
//   }
//   return n = recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(6));

//---------------- Recursive factorial ------------------------//

// function recursiveFactorial (n){
//   if(n<=1){
//     return 1
//   }

//   return n*recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(3));

//----------------------recursive Array sum--------------------------//

// function recursiveArraySum(arr){
//   if(arr.length === 0){
//     return 0;
//   }else{
//     return arr[0]+recursiveArraySum(arr.slice(1))

//   }

// }

// console.log(recursiveArraySum([1,2,3,4,5]));

//---------------------Recursive string reverse--------------------------//

// function stringReverse(str){
//   if(str.length === 1){
//     return str
//   }else{
//     return str[str.length-1]+stringReverse(str.slice(0,-1))

//   }
  
// }

// console.log(stringReverse('Hello,world'))


//----------------------Recursive Greatest common deviser of two numbers---------------//

// var gcd = function(a,b){
//     if(!b){
//         return a;
//     }
//     return gcd(b , a % b)
// }

// console.log(gcd(6,12));


//-------------------Recursive integers in range----------------------//

// function range(start,end){
//     if(end-start === 2){
//         return [start+1]
//     }else{
//         let list = range(start,end-1)
//         list.push(end-1)
//         return list;
//     }
// }
// console.log(range(2,9));


//-----------------Recursive Exponential--------------------------//

// function exponent(a,n){
//     if(n=== 0){
//         return 1
//     }else{
//         return a * exponent(a,n-1);
//     }
// }

// console.log(exponent(3,3));


//---------------------Recursive Iseven Check---------------------------//

// function isEven(number){
//     if(number < 0){
//         number = Math.abs(number)
//     }

//     if(number === 0){
//         return true
//     }
//     if(number === 1){
//         return false
//     }else{
//         return isEven(number-2)
//     }
// }

// console.log(isEven(5));

//-----------------------Recursive check Palindrome-------------------//

// function Palindrome(word){
//     if(typeof(word) !== 'string'){
//         return 'The word should not be empty'
//     }
//     if(word.length<=1){
//         return true
//     }
//     if(word[0] !== word[word.length-1]){
//         return false
//     }else{
//         return Palindrome(word.slice(1,word.length-1))
//     }
// }

// console.log(Palindrome('madam'));
//----------------------Recursive Binary Search--------------------------//

// function recursiveBinarySearch(arr,target){
//   return search(arr,target,0,arr.length)
// }

// function search(arr,target,leftIndex,rightIndex){
//   if(leftIndex>rightIndex){
//     return -1
//   }

//   let middleIndex = Math.floor((leftIndex+rightIndex)/2);
//   if(arr[middleIndex] === target){
//     return middleIndex
//   }

//   if(arr[middleIndex]>target){
//     return search(arr,target,leftIndex,middleIndex-1)
//   }else{
//     return search(arr,target,middleIndex+1,rightIndex)
//   }

// }

// console.log(recursiveBinarySearch([1,2,3,4,5],4));

///////////////////------------Array functions---------------////////////////

// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middleIndex]=== target){
//             return middleIndex
//         }

//         if(arr[middleIndex]>target){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return false
// }

// console.log(binarySearch([1,2,3,4],3));


///////////////////---------------SET -----------------/////////////


// const set = new Set([1,2,3])
// set.add(4)
// console.log(set.has(4))
// set.delete(3)
// console.log(set.size)
// set.clear()

// for(const item of set){
//     console.log(item)
// }

/////////////////////-------------MAP --------------////////////////

// const map = new Map([['a',1],['b',2]])
// map.set('c',3)
// console.log(map.has('a'));
// map.delete('c')
// console.log(map.size);
// map.clear()


// for(const [key,value] of map){
//     console.log(${key}:${value})
// }