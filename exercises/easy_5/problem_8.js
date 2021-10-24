/*
Create a function that takes two integers as arguments. The first argument
is a count, and the second is the starting number of a sequence that your
function will create. The function should return an array containing the same
number of elements as the count argument. The value of each element should be
a multiple of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array.

---
Problem:
Input: Two Numbers
Output: Array

Definitions and Rules:
- First number is the number elements in an array.
- Second number is the starting number
- Iterate from the starting number for number of elements

Examples/Test Cases:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Data Structure:
Array

Algorithm:
- Create a counter = 1
- Create empty result array.
- While counter is below first number:
  - counter * second number -> push to array.
  - counter += 1
- Return array.
*/

function sequence(num1, num2) {
  let counter = 1;
  let array = [];

  while (counter <= num1) {
    array.push(counter * num2);
    counter += 1;
  }
  return array;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

function sequence2(num1, num2) {
  let array = [];

  for (let num = 1; num <= num1; num += 1) {
    array.push(num * num2);
  }

  return array;
}

console.log(sequence2(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7));         // [-7, -14, -21, -28]
console.log(sequence2(3, 0));          // [0, 0, 0]
console.log(sequence2(0, 1000000));    // []

