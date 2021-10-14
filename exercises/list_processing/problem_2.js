/*
--(P)roblem--
Input: Array of numbers from 0 to 19.
Output: Sorted array of numbers from 0 to 19

Explicit Requirements:
- Numbers are between 0 and 19 only
- Use english word to sort

Implicit Requirements:
- Should be all lowercase

--(E)xamples--
[0, 1, 2, 3] -> [1, 3, 2, 0]
[4, 5, 6] -> [5, 4, 6]
[11, 15, 19] -> [11, 15, 19]

--(D)ata Structure--
Keep as an array.

--(A)lgorithm--
1. Create an object to store all the number and its word number counter-part.
2. Use the `sort` method and sort by the word number.
*/

const ALPHA = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    let alphaA = ALPHA[a];
    let alphaB = ALPHA[b];

    if (alphaA < alphaB) {
      return -1;
    } else if (alphaA > alphaB) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]