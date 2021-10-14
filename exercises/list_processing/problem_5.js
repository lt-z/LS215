/*
--(P)roblem--
Input: String
Output: Array

Explicit Requirements:
- Returning array is ordered from shortest to longest.
- Substring starts with the first letter of the word.

Implicit Requirements:
- Input string is one character or larger.
- Input is always a string.
- Input length of string = Array length

--(E)xamples--
'abc' -> ['a', 'ab', 'abc']
'launch' -> ['l', 'la', 'lau', 'laun', 'launc', 'launch']

--(D)ata Structure--
Convert from string to an array

--(A)lgorithm--
1. Create a new empty array.
2. Split input string into an array.
3. Iterate through array:
  Slice from 0 to index + 1
  Push slice into new array.
4. Return array.

Further Exploration:
1. Split string into an array.
2. Using `map`, return the slice from 0 to index + 1.
*/

function leadingSubstrings(string) {
  let array = string.split('');
  return array.map((_, idx) => {
    return array.slice(0, idx + 1).join('');
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]