/*
Write a function that takes one argument, a positive integer,
and returns a list of the digits in the number.

---
Problem:
Input: Number
Output: Array

Definitions and Rules:
- Number is always positive.
- Return an array of digits of the input number.

Examples/Test Cases:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

Data Structure:
Number -> String -> Array

Algorithm:
- Convert to string then to array then map each item as a number.
*/

function digitList(number) {
  return String(number).split('').map(Number);
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]