/*
Write a function that takes an arbitrary MxN matrix, rotates it
clockwise by 90-degrees as described above, and returns the result
as a new matrix. The function should not mutate the original matrix.

---
Problem:
Input: Array
Output: Array

Definitions and Rules:
-

Examples/Test Cases:
See below

Data Structure:
Array

Algorithm:
- Create empty array.
- Loop from array col #s from 0 to col length:
  - Create subarray.
  - Iterate from row length to 0:
    -push into subarray: array[row][col]
  - Push subarray into new array.
- Return array.
*/

function rotate90(array) {
  let result = [];

  for (let col = 0; col < array[0].length; col += 1) {
    let subArray = [];
    for (let row = array.length - 1; row >= 0; row -= 1) {
      subArray.push(array[row][col]);
    }
    result.push(subArray);
  }
  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]