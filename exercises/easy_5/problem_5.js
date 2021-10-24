/*
Write a function that takes a number as an argument. If the argument
is a positive number, return the negative of that number. If the argument
is a negative number, return it as-is.

---
Problem:
Input: Number
Output: Number

Definitions and Rules:
- Always return a negative number.

Examples/Test Cases:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Data Structure:
- Number

Algorithm:
- Return Math.abs(num) * -1
*/

function negative(number) {
  return Math.abs(number) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

function negative(number) {
  return number < 0 ? number : -number;
}
