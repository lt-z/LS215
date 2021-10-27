/*
Binary Search

---
Problem
Input: Array, Target (string or int)
Output: Index or -1

Definitions and Rules:
- Find the index of the item using binary search

Examples/Test Cases:
See below.

Data Structure:
Array

Algorithm:
- Create left start at 0
- Create right start at array length - 1

- while left is smaller or equal to right:
- Find middle value -> Math.ceil(left + right)
- If middle value = target -> return index
- If middle value < target:
  - left = middle + 1, right = right
- If middle value > target:
  - left = left, right = middle - 1
- Otherwise, return -1
*/

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);

    if (array[middle] === target) return middle;
    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1