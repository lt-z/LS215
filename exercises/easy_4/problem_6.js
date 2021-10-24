/*
Write a function that takes an array of integers as input,
multiplies all of the integers together, divides the result
by the number of entries in the array, and returns the result
as a string with the value rounded to three decimal places.

---
Problem:
Input: Array
Output: Number

Definitions and Rules:
- Multiply all numbers in array then divide by length of array.
- Return result as a string to 3 decimal places.
- All array elements are numbers
- Array always has elements
- Ignore input validation

Examples/Test Cases:
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
showMultiplicativeAverage([12, 50, 23]);                   // "28.333"
showMultiplicativeAverage([1, 1, 1, 1]);            // "0.25"

Data Structure:
Array -> Number -> String

Algorithm:
- Use reduce to multiply all numbers in the array with eachother.
- Divide by length of original array to fixed 3.
*/
function showMultiplicativeAverage(array) {
  let result = array.reduce((mult, num) => mult * num) / array.length;
  return result.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
console.log(showMultiplicativeAverage([12, 50, 23]));                   // "28.333"
console.log(showMultiplicativeAverage([1, 1, 1, 1]));            // "0.25"
