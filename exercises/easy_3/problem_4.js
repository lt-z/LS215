/*
Write a function that returns true if the string passed
as an argument is a palindrome, or false otherwise. A
palindrome reads the same forwards and backwards. For
this problem, the case matters and all characters matter.
---
Problem:
Input: String
Output: Boolean

Definitions and Rules:
- If the string is a palindrome (spelled front and back the same) -> true
- Case of string matters and all characters matter.
- Numbers and non alpha characters matter.
- Empty string should be true

Examples/Test Cases:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Data Structure:
String -> boolean

Algorithm:
- If string === reversed string
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true