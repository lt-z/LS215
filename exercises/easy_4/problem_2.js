/*
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.

---
Problem:
Input: 2 Arrays
Output: Array

Definitions and Rules:
- No duplication of values in the returned array.
- Both arguments are always arrays.
- Do not need to be similar length arrays.


Examples/Test Cases:
[1, 3, 5], [3, 6, 9] -> [1, 3, 5, 6, 9]
[1, 1, 1], [2, 2, 2] -> [1, 2]
[1, 1, 1] , [1, 1, 1,] -> [1]
[], [1, 2, 3] -> [1, 2, 3]
Data Structure:
Array

Algorithm:
- Concatenate both arrays together:
- Remove duplicates:
  - Create new array:
  - Iterate through concatenated array:
    - If element not in new array -> push to new array.
- Return new array
*/

function union(arr1, arr2) {
  let concat = arr1.concat(arr2);
  let result = [];

  concat.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));       // [1, 3, 5, 6, 9])
console.log(union([1, 1, 1], [2, 2, 2]));       // [1, 2]
console.log(union([1, 1, 1] , [1, 1, 1,]));     // [1]
console.log(union([], [1, 2, 3]));              // [1, 2, 3]

// Alternative
function union(arr1, arr2) {
  let concat = arr1.concat(arr2);
  return concat.filter((num, idx, arr) => arr.indexOf(num) === idx);
}