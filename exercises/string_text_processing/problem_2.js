/*
--(P)roblem--
Input: Array of strings
Output: Array of strings

Explicit Requirements:
- Remove all vowels from strings.

Implicit Requirements:
- Vowels can be either capitalized or uncapitalized.
- Does not mention if input array can be manipulated in-place.


--(E)xamples--
['abcde', 'green', 'YELLOW'] -> ['bcd', 'grn', 'YLLW']
['a', 'b', 'c'] -> ['', 'b', 'c']

--(D)ata Structure--
Keep as an array.

--(A)lgorithm--
1. Use `map` to iterate through the array:
  Transform each string to replace the vowels using regex with emptry string.
    Regex: /[aeiou]/gi
2. Return the transformed array.
*/

function removeVowels(array) {
  return array.map(string => {
    return string.replace(/[aeiou]/gi, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
