/*
MxN matrix
Matrix transposes are not limited to 3x3 matrices, or even square
matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that
it works with any MxN matrix with at least one row and one column.

---
Problem:
Input: Nested Array
Output: Nested Array

Definitions and Rules:
- Transpose the values in the nested array.
- Create a new matrix, do not modify the existing matrix.
- Should work for any matrix that has at least one row and column.

Examples/Test Cases:
transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

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

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]