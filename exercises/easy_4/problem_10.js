/*
Write a function that takes one argument, an array containing integers,
and returns the average of all the integers in the array, rounded down
to the integer component of the average. The array will never be empty,
and the numbers will always be positive integers.

---
Problem:
Input: Array
Output: Number

Definitions and Rules:
- Input array is never empty.
- Numbers are always positive integers.
- Return average of all the numbers in the array.

Examples/Test Cases:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

Data Structure:
Array -> Number

Algorithm:
- Reduce sum of all numbers then divide by length of original array
  then round down.
*/

function average(array) {
  return Math.floor(array.reduce((sum, num) => sum + num) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40