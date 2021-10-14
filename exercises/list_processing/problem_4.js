/*
--(P)roblem--
Input: Array
Output: Number

Explicit Requirements:
- Array will have at least one number.
- Elements in array are always numbers.

Implicit Requirements:
- Numbers within array are positive.

--(E)xamples--
[3, 5, 2] -> 3 + (3 + 5) + (3 + 5 + 2) -> 21
[1, 5, 7, 3] -> 1 + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) -> 36

--(D)ata Structure--
Convert from array to a number.

--(A)lgorithm--
1. Iterate through array with `reduce`:
    Slice array from 0 to current index + 1. Sum the sliced array with `reduce`.
    Add sliced array sum to accumulator.
2. Return `reduced` sum.
*/

function sumOfSums(array) {
  return array.reduce((acc, _, idx) => {
    let slice = array.slice(0, idx + 1).reduce((sum, num) => sum + num, 0);
    acc += slice;
    return acc;
  }, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35