/*
3x3 matrix
Write a function that takes an array of arrays that represents a 3x3
matrix and returns the transpose of the matrix. You should implement
the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce
a new matrix and leave the input matrix array unchanged.

---
Problem:
Input: Nested Array
Output: Nested Array

Definitions and Rules:
- Transpose the values in the nested array.
- Create a new matrix, do not modify the existing matrix.
-

Examples/Test Cases:
[[1, 4, 3], [5, 7, 9], [8, 2, 6]] -> [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Data Structure:
Array

Algorithm:
- Create empty array matrix.
- Iterate through the original nested array: [0 - 2] (col)
  - Create subarray.
- Iterate through the rows: [0 - 2] (row)
    - push to subarray[row][col] (0, 0), (1, 0), (2, 0)
  Push subarray to new matrix.
- Return new matrix.
*/

function transpose(array) {
  let result = [];
  for (let col = 0; col < array[0].length; col += 1) {
    let subArray = [];
    for (let row = 0; row < array.length; row += 1) {
      subArray.push(array[row][col]);
    }
    result.push(subArray);
  }
  return result;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]