/*
Write a function that takes a string argument containing one or more
words and returns a new string containing the words from the string
argument. All five-or-more letter words should have their letters in
reverse order. The string argument will consist of only letters and spaces.
Words will be separated by a single space.


---
Problem:
Input: String
Output: String

Definitions and Rules:
- If word is 5+ characters, reverse letters in the word.
- Otherwise, the word remains as is.
- Words are all spaced by one space.

Examples/Test Cases:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

Data Structure:
String -> Array -> String

Algorithm:
- Split string by ' ' then reverse then join back together with ' '.
*/

function reverseWords(string) {
  return string.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"se"