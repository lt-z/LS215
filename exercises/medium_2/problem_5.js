/*
Write a function that computes the difference between the square
of the sum of the first n positive integers and the sum of the
squares of the first n positive integers.

---
Problem
Input: Number
Output: Number

Definitions and Rules:
- Sum of square => Number ^ square + number ^ square
- Square of sum => (number + number) ^ square
- Square of sum - Sum of Square
- Ignore input validation

Examples/Test Cases:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Data Structure:
Number

Algorithm:
- Store sum of square
- Store square of sum:
- Iterate from 1 to number:
  - Calc sum of sq -> += (num) ^ 2
  - Calc square of sum -> += num
- Return result -> (square of sum) ^ 2 - sum of square
*/

function sumSquareDifference(number) {
  let sumOfSquare = 0;
  let squareOfSum = 0;

  for (let num = 1; num <= number; num += 1) {
    sumOfSquare += Math.pow(num, 2);
    squareOfSum += num;
  }

  return Math.pow(squareOfSum, 2) - sumOfSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150