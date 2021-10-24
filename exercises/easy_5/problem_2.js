/*
Write a function that takes a string, doubles every consonant character
in the string, and returns the result as a new string. The function should
not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Do not double vowels, digits, punctuations, or whitespace.
- Double consonants.

Examples/Test Cases:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Data Structure:
String

Algorithm:
- If letter is a consonant replace with double consonant.
*/
function doubleConsonants(string) {
  return string.replace(/([bcdfghjklmnprsqtvwxyz])/gi, '$1$1');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""