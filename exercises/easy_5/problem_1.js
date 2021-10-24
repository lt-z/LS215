/*
Write a function that takes a string, doubles every character
in the string, and returns the result as a new string.

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Return a new string.
- Double character in the string.

Examples/Test Cases:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

Data Structure:
String

Algorithm:
- Create an empty string as result.
- Iterate through each character in the original string:
  - Repeat each character twice and add into result string.
*/

function repeater(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    result += string[idx].repeat(2);
  }
  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""