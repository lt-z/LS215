/*
Write a function that takes a string argument and returns a new
string containing the words from the string argument in reverse order.

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Return a new string with the words in the string reversed.
- Not reverse the characters of the word, but the order of the words.
- Empty string returns an empty string.

Examples/Test Cases:
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Data Structure:
String -> Array -> String

Algorithm:
- Split string by ' ' then reverse then join back together with ' '.
*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"