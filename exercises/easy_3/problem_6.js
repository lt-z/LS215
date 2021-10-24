/*
Write a function that returns true if its integer argument is palindromic,
or false otherwise. A palindromic number reads the same forwards and backwards.

---
Problem:
Input: Number
Output: Boolean

Definitions and Rules:
- If the number is a palindrome (spelled front and back the same) -> true
- No input validation.


Examples/Test Cases:
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

Data Structure:
Number -> String -> boolean

Algorithm:
- Convert number to string
- Return if string === reversed string.
*/

function isPalindromicNumber(number) {
  let str = String(number);
  return str === str.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true