/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the
first digit to the end.

---
Problem
Input: Two numbers
Output: Number

Definitions and Rules
- Rotate the the digits based on the second number.
  - Only move that digit to the end.

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Data Structure
Number -> String -> number

Algorithm:
- digit to move -> length - second input
- Convert number to string
- First -> slice from 0 to digit to move
- Second - Slice from digit to move + 1
- digit to move
*/

function rotateRightmostDigits(num1, num2) {
  num1 = String(num1);

  let digitIndx = num1.length - num2;
  let first = num1.slice(0, digitIndx);
  let second = num1.slice(digitIndx + 1);
  return Number(first + second + num1[digitIndx]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917