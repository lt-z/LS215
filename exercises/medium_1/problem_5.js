/*
Write a function that takes a sentence string as an argument and returns
that string with every occurrence of a "number word" — 'zero', 'one',
'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' —
converted to its corresponding digit character.

---
Problem
Input: String
Output: String

Definitions and Rules:
- Convert the string version of a number to the number version

Examples/Test Cases:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Data Structure:
String

Algorithm:
- Create an object that stores the key as word numbers and values as numbers.
- Iterate through the object:
  - If string matches key, replace with value.
*/

function wordToDigit(string) {
  let obj = {
    zero: 0, one: 1,
    two: 2, three: 3,
    four: 4, five: 5,
    six: 6, seven: 7,
    eight: 8, nine: 9,
    ten: 10
  };
  for (let word in obj) {
    let regex = new RegExp(word, 'gi');
    string = string.replace(regex, obj[word]);
  }
  return string;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."