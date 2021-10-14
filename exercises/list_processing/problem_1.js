/*
--(P)roblem--
Input: Positive integer
Output: Positive integer that is the sum of the input integers.

Explicit Requirements:
- Cannot use `for`, `while`, or `do...while` loops.
- Use method calls to perform the sum.
- Numbers are all positive integers.

Implicit Requirements:
- Add up each by single digit, so it will always be 0-9.

--(E)xamples--
23 -> (2 + 3) -> 5
496 -> (4 + 9 + 6) -> 19
123456789 + (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) -> 45

--(D)ata Structure--
Convert number to an array of numbers then back to a number.

--(A)lgorithm--
1. Split number into single digits, into an array.
2. Use `reduce` method to add up each number.
3. Return sum.
*/

function sum(number) {
  let array = String(number).split('').map(Number);
  return array.reduce((sum, num) => sum + num, 0);
}

console.log(sum(23)); // 5
console.log(sum(496));  // 19
console.log(sum(123456789)); // 45