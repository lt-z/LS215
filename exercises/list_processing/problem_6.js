/*
--(P)roblem--
Input: String
Output: Array

Explicit Requirements:
- The return array should start at where the substring begins.
- Return a list of substrings of a string.

Implicit Requirements:
- Number of elements in return array is length * (length + 1) / 2.
- One or more chars in the input string.

--(E)xamples--
'abc' -> ['a', 'ab', 'abc',
          'b', 'bc'
          'c']

--(D)ata Structure--
Convert from string to an array

--(A)lgorithm--
1. Iterate through the array with `map`:
    return `leadingSubstrings` function for current idx to end.
2. Return full arrays with spread syntax then flatten arrays to one array.
*/

function substrings(string) {
  let array = string.split('');
  return array.map((_, idx, arr) => {
    return leadingSubstrings(arr.slice(idx));
  }).flat();
}

function leadingSubstrings(array) {
  return array.map((_, idx) => {
    return array.slice(0, idx + 1).join('');
  });
}

console.log(substrings('abcde'));
console.log(substrings('launch'));