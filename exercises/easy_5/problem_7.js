/*
Write a function that takes a string argument consisting of a first name
, a space, and a last name, and returns a new string consisting of the
last name, a comma, a space, and the first name.

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Input will always have first name and last name with a space in between.
- Return the last name, first name.

Examples/Test Cases:
swapName('Joe Roberts');    // "Roberts, Joe"

Data Structure:
Array -> String

Algorithm:
- Convert into a array via split, and split through the space.
- Reverse the array and join with ', '
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName2(name) {
  let array = name.split(' ');
  return array.slice(-1) + ', ' + array.slice(0, -1).join(' ');
}

console.log(swapName2('Joe Bob Roberts'));    // "Roberts, Joe"
