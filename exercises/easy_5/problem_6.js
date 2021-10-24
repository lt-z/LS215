/*
Write a function that takes an integer argument and returns an array
containing all integers between 1 and the argument (inclusive), in
ascending order.

You may assume that the argument will always be a positive integer.

---
Problem
Input: Number
Output: Array

Definitions and Rules:
- Return an array from 1 to input number.
- Number will always be positive.

Examples/Test Cases:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Data Structure:
Array

Algorithm:
- Create an empty array.
- Iterate from 1 to input number -> push into array.
- Return array.
*/

function sequence(number) {
  let arr = [];
  for (let num = 1; num <= number; num += 1) {
    arr.push(num);
  }
  return arr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]