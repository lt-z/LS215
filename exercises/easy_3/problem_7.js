/*
Write a function that takes an array of numbers and returns an array with the
same number of elements, but with each element's value being the running total
from the original array.
---
Problem:
Input: Array
Output: Array

Definitions and Rules:
- Empty array returns an empty array.
- Original number is added to the number behind it, creating a running total.

Examples/Test Cases:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Data Structure:
Array

Algorithm:
- Iterate through the array with reduce, initial is empty array:
  - Add current number to last number and push to array.
- Return reduced array.
*/

function runningTotal(array) {
  return array.reduce((sum, num) => {
    let lastNum = sum[sum.length - 1] || 0;
    sum.push(lastNum + num);
    return sum;
  }, []);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []