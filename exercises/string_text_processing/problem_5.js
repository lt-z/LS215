/*
--(P)roblem--
Input: String
Output: String

Explicit Requirements:
- Leave non alphabetic characters unchanged.

Implicit Requirements:
- There will always be one or more characters.

--(E)xamples--
'CamelCase' -> 'cAMELcASE'
'123tv' -> '123TV'

--(D)ata Structure--
Convert to an array then back to a string.

--(A)lgorithm--
1. Convert string to array with `map`:
    If character is uppercase -> convert to lowercase.
    If char is lowercase -> convert to uppercase.
2. Return transformed string via `join`.
*/

function swapCase(string) {
  return string.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    }
    return char;
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
