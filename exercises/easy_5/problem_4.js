/*
Write a function that takes a non-empty string argument and
returns the middle character(s) of the string. If the string
has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly
two characters.

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Input string is never empty.
- Return middle characters of string.
- If string length is odd -> return middle char -> 5 chars = floor of length / 2
- If string length is even -> 6 chars = slice 2 - 4

Examples/Test Cases:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Data Structure:
String

Algorithm:
- get half -> floor of length / 2
- If string is odd -> return half
- Else -> slice from half - 1, half + 1
*/
function centerOf(string) {
  let half = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string[half];
  } else {
    return string.slice(half - 1, half + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"