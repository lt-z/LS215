/*
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Problem:
Input: String, String
Output: String

Definitions and Rules:
- Both arguments are two strings.
- Both strings are required to be different lengths.
- Concatenate short + long + short
- Do same even if empty string.

Examples/Test Cases:
'ab', 'abc' -> 'ababcab'
'', 'a', -> 'a'

Data structure:
String

Algorithm:
- If string1 is shorter than string2:
  - return string1 + string2 + string1
- Else:
  - return string2 + string1 + string2
*/

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  }
  return string2 + string1 + string2;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

