/*
Write a program that solicits six numbers from the
user and logs a message that describes whether the sixth
number appears among the first five numbers.
---
Problem:
Input: 6 Numbers
Output: String

Definitions and Rules:
- First 5 numbers are compared with the last number.
- If last number in 5 numbers, indicate so.
- Otherwise -> say it doesn't appear in the array.

Examples/Test Cases:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

Data Structure:
Array -> String

Algorithm:
- Prompt for 5 numbers and store in an array.
- Prompt for last number and store in var.
- If array includes last number:
  - Say it appears
- Else:
  - Say it doesn't appear
*/
let prompt = require('readline-sync').question;

function searching() {
  let array = [];
  array.push(prompt('Enter the 1st number: '));
  array.push(prompt('Enter the 2nd number: '));
  array.push(prompt('Enter the 3rd number: '));
  array.push(prompt('Enter the 4th number: '));
  array.push(prompt('Enter the 5th number: '));

  let target = prompt('Enter the last number: ');
  if (array.includes(target)) {
    return `The number ${target} appears in [${array.join(', ')}]`;
  } else {
    return `The number ${target} does not appear in [${array.join(', ')}]`;
  }
}

// console.log(searching());

// Further Exploration
function searching2() {
  let array = [];
  array.push(prompt('Enter the 1st number: '));
  array.push(prompt('Enter the 2nd number: '));
  array.push(prompt('Enter the 3rd number: '));
  array.push(prompt('Enter the 4th number: '));
  array.push(prompt('Enter the 5th number: '));

  let target = prompt('Enter the last number: ');

  if (array.some(num => num > target)) {
    return `Number(s) in [${array.join(', ')}] are larger than ${target}`;
  }
  return `No number in [${array.join(', ')}] is larger than ${target}`;
}

console.log(searching2());