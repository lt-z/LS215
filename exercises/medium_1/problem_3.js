/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits to get
329175. Keep the first two digits fixed in place and rotate again to get 321759.
Keep the first three digits fixed in place and rotate again to get 321597.
Finally keep the first four digits fixed in place and rotate the final two
digits to get 321579. The resulting number is called the maximum rotation
of the original number.

Write a function that takes an integer as an argument and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.
---
Problem
Input: Number
Output: Number

Definitions and Rules:
- Rotate by one digit to the left, then 2, then 3, etc.
- Iterate from length of array to 1.

Examples/Test Cases:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Data Structure:
Number -> String

Algorithm:
- Iterate from length of array to 1, increment down 1:
  - Perform rotate right most digits
- Return new number
*/

function maxRotation(number) {
  for (let num = String(number).length; num > 0; num -= 1) {
    number = rotateRightmostDigits(number, num);
  }
  return number;
}


function rotateRightmostDigits(num1, num2) {
  num1 = String(num1);

  let digitIndx = num1.length - num2;
  let first = num1.slice(0, digitIndx);
  let second = num1.slice(digitIndx + 1);
  return Number(first + second + num1[digitIndx]);
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845