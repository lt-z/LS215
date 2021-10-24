/*
Write a function that takes two array arguments, each containing a
ist of numbers, and returns a new array that contains the product
of each pair of numbers from the arguments that have the same index.
You may assume that the arguments contain the same number of elements.

---
Problem:
Input: Two arrays
Output: Array

Definitions and Rules:
- Output array is same length as input arrays.
- Input arrays contain same length.
- Elements with same indexes are multiplied together.
- Elements are all numbers.

Examples/Test Cases:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
multiplyList([10, 10], [1, 1]);    // [10, 10]
multiplyList([1, 1, 1], [2, 3, 4]);    // [2, 3, 4]
multiplyList([0, 12, 24, 36], [36, 24, 12, 0]);    // [0, 288, 288, 0]

Data Structure:
Array

Algorithm:
- Map first array with index:
  - Return item * array2[index]
*/

function multiplyList(array1, array2) {
  return array1.map((num, idx) => num * array2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([10, 10], [1, 1]));    // [10, 10]
console.log(multiplyList([1, 1, 1], [2, 3, 4]));    // [2, 3, 4]
console.log(multiplyList([0, 12, 24, 36], [36, 24, 12, 0]));    // [0, 288, 288, 0]
