
/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
---
Problem:
Input: String
Output: String

Definitions and Rules:
- If there are duplicate consecutive (2+) characters, collapse to a single character.
- Otherwise, return original character.
- Can be any type of character.

Examples/Test Cases:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structure:
Array to string

Algorithm:
- Create string var.
- Iterate through array:
  - If current char is different from last char add to string var:
    - Add to string var.
- Return string.
*/

function crunch(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (result.slice(-1) !== string[idx]) {
      result += string[idx];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
