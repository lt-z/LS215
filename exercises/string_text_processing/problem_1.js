/*
--(P)roblem--
Input: string
Output: boolean

Explicit Requirements:
- Ignore characters that are not alphabetic.

Implicit Requirements:
- can be an empty string, which returns true

--(E)xamples--
'Four Score' -> false
'FOUR' -> true

--(D)ata Structure--
Convert from string to array to compare then to boolean value.

--(A)lgorithm--
1. Convert to an array via `split` method.
2. Use the `every` method to check if every character is an uppercase.
*/

function isUppercase(string) {
  return string.split('').every(char => char.toUpperCase() === char);
}

function isUppercaseRegex(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

console.log('----');

console.log(isUppercaseRegex('t'));               // false
console.log(isUppercaseRegex('T'));               // true
console.log(isUppercaseRegex('Four Score'));      // false
console.log(isUppercaseRegex('FOUR SCORE'));      // true
console.log(isUppercaseRegex('4SCORE!'));         // true
console.log(isUppercaseRegex(''));                // true
