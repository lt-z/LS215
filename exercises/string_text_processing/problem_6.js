/*
--(P)roblem--
Input: String
Output: String

Explicit Requirements:
- First char is capitalized.
- Non alpha chars are counted but not changed.

Implicit Requirements:
- There will always be one or more characters.

--(E)xamples--
'I Love Launch School!' -> '"I LoVe lAuNcH ScHoOl!"'
'123tv' -> '123tV'

--(D)ata Structure--
Convert to an array then back to a string.

--(A)lgorithm--
1. Convert string to array with `map`:
    Odd indexes -> lowercase
    Even indexes -> uppercase
2. Return transformed array.
*/

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 1) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
