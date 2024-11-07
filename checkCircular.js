class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isCircular(head) {
    if (!head) return false; // An empty list cannot be circular

    let slow = head;  // Slow pointer (tortoise)
    let fast = head;  // Fast pointer (hare)

    while (fast !== null && fast.next !== null) {
        slow = slow.next;            // Move slow pointer by 1 step
        fast = fast.next.next;       // Move fast pointer by 2 steps

        if (slow === fast) {
            return true;  // A cycle is detected
        }
    }
    
    return false;  // No cycle, fast pointer reached the end
}

// Testing the function
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
// Uncomment the next line to create a cycle
// node4.next = node2;

console.log(isCircular(node1)); // Output: false (No cycle)

node4.next = node2;  // Creating a cycle for testing
console.log(isCircular(node1)); // Output: true (Cycle detected)
