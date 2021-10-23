/*
Write a function that takes one argument, a positive integer,
 and returns a string of alternating '1's and '0's, always
 starting with a '1'. The length of the string should match
 the given integer.

---
Problem:
Input: Number
Output: String

Definitions and Rules:
- String output should always start with '1'.
- String output alternates between '1' and '0'.
- Output is the length of the input number.

Examples/Test Case:
4 -> 1010
5 -> 10101
6 -> 101010
7 -> 1010101
8 -> 10101010

Data Structure:
Keep as a String.

Algorithm:
- Create an empty string variable.
- Iterate from 1 to number input:
- If number is odd -> add 1
- Else -> add 0
- Return string.
*/

function stringy(number) {
  let result = '';
  for (let num = 1; num <= number; num += 1) {
    if (num % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

console.log(stringy(4));    // "1010"
console.log(stringy(6));    // "101010"
console.log(stringy(7));    // "1010101"
console.log(stringy(9));    // "101010101"