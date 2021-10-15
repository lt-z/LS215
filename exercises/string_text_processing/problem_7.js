/*
--(P)roblem--
Input: String
Output: String

Explicit Requirements:
- First char is capitalized.
- Non alpha chars are not counted.

Implicit Requirements:
- There will always be one or more characters.

--(E)xamples--
'I Love Launch School!' -> "I lOvE lAuNcH sChOoL!"
'123tv' -> '123Tv'

--(D)ata Structure--
Convert to an array then back to a string.

--(A)lgorithm--
1. Create a counter starting at 0.
2. Convert string into an array of characters.
3. Iterate through the array:
  If alphabetic char -> counter += 1,
    if counter is even -> uppercase
    else -> lowercase
4. Return string from `join`
*/

function staggeredCase(string) {
  let counter = 0;
  return string.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      if (counter % 2 === 0) {
        counter += 1;
        return char.toUpperCase();
      }
      counter += 1;
      return char.toLowerCase();
    }
    return char;
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
