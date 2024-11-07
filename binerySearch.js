function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);  // Find the middle index
        if (arr[mid] === target) {
            return mid;  // Element found
        } else if (arr[mid] < target) {
            low = mid + 1;  // Target is greater, search the right half
        } else {
            high = mid - 1;  // Target is smaller, search the left half
        }
    }

    return -1;  // Element not found
}

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: target is not found
    if (left > right) {
        return -1;  // target is not in the array
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Base case: target is found
    if (arr[mid] === target) {
        return mid;  // target found, return index
    }

    // Recursive cases
    if (arr[mid] < target) {
        // Search in the right half
        return recursiveBinarySearch(arr, target, mid + 1, right);
    } else {
        // Search in the left half
        return recursiveBinarySearch(arr, target, left, mid - 1);
    }
}
