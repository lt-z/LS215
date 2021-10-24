/*
Write another function that returns true if the string passed as an argument
is a palindrome, or false otherwise. This time, however, your function should
be case-insensitive, and should ignore all non-alphanumeric characters. If
you wish, you may simplify things by calling the isPalindrome function you
wrote in the previous exercise.
---
Problem:
Input: String
Output: Boolean

Definitions and Rules:
- Ignore non-alpha characters
- Is case insensitive

Examples/Test Cases:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

Data Structure:
String -> Boolean

Algorithm:
- Replace all non-alphanumeric chars with ''
- Convert all chars to lowercase.
- Check if palindrome.
*/

function isRealPalindrome(string) {
  string = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return isPalindrome(string);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false