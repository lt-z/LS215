/*
Given a string of words separated by spaces, write a function that swaps
the first and last letters of every word.

You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that each
string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces.
---
Problem:
Input: String
Output: String

Definitions and Rules:
- Each word contains at least one letter.
- No input validation
- Swap first and last characters for each word
- No extra spaces between words are assumed.
- Keep case when swapping.
- Swap -> slice(-1) + slice (1, -1) + slice(0, 1)

Examples/Test Cases:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data Structure:
Array -> String

Algorithm:
- Convert into an array with split.
- Iterate through the array with map.
  - If word length is larger than 1 -> perform a swap
  - Otherwise -> return word
- Return and join back into a string.
*/

function swap(string) {
  let array = string.split(' ');
  return array.map(word => {
    if (word.length > 1) {
      return word.slice(-1) + word.slice(1, -1) + word[0];
    }
    return word;
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"