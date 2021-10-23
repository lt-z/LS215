/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
---
Problem:
Input: Number
Output: Number

Definitions and Rules:
- Input number is top of range.
- Input must be greater than 1.
- From 1 to number (inclusive).
- For any number that is a multiple of 3 or 5, add to a sum.

Examples/Test Case:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Data Structure:
Array to Number

Algorithm:
- Create an empty array.
- For loop from 1 to input number (inclusive):
  - If number is divisible by 3 or 5 evenly:
    - Push to array.
- Return reduce the sum of numbers in the array.
*/

function multisum(number) {
  let arr = [];
  for (let num = 1; num <= number; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      arr.push(num);
    }
  }

  return arr.reduce((sum, num) => sum + num);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
