/*
Write a function that takes a positive integer as an argument and
returns that number with its digits reversed.

---
Problem:
Input: Number
Output: Number

Directions and Rules:
- Return the reversed number.
- If numbers end with 0 and are reversed, the 0s are dropped.

Examples/Test Cases:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

Data Structure:
String -> Array -> Number

Algorithm:
- Convert number to string, then convert into an array.
- Reverse array. Convert to string, then convert to number.
*/

function reverseNumber(number) {
  let reversed = String(number).split('').reverse();
  return Number(reversed.join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1