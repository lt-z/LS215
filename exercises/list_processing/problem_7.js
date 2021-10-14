/*
--(P)roblem--
Input: String
Output: Array

Explicit Requirements:
- Duplicate substrings are included multiple times.
- Array should be ordered by appearance.
- Is case-sensitive.
- Do not include single characters.

Implicit Requirements:
- Non alphabetic characters are included in palindrome.
- Return can be an empty array.

--(E)xamples--
'abcd' -> []
'madam' -> ['madam', 'ada']

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

function palindromes(string) {
  return substrings(string)
    .filter(str => str.length > 1 && reverseStr(str) === str);

}

function reverseStr(string) {
  return string.split('').reverse().join('');
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));       // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
