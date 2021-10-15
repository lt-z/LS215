/*
--(P)roblem--
Input: String
Output: String

Explicit Requirements:
- Only capitalize the first char of each word if it is in the alphabet.
- Remaining characters are lowercased.
- Word is any sequence of non-whitespace characters.

Implicit Requirements:
- if word is one character long, it is capitalized.


--(E)xamples--
'four score and seven' -> 'Four Score and Seven'
'this is a "quoted" word' -> 'This is A "quoted" Word'
'the javaScript language' -> 'The Javascript Language'

--(D)ata Structure--
Convert string to array then back to string.

--(A)lgorithm--
1. Convert into an array and iterate with `map`:
  For each item, if character is between a-z:
    Transform to uppercase, then transform remaining characters to lowercase.
2. Convert from array to string with `join`
*/

function wordCap(string) {
  return string.split(' ').map(str => {
    if (/[a-z]/.test(str[0])) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    return str[0] + str.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
