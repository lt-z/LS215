/*
Write a function that takes an array as an argument and returns an
array that contains two elements, each of which is an array.
Put the first half of the original array elements in the first
element of the return value, and put the second half in the second
element. If the original array contains an odd number of elements,
place the middle element in the first half array.

---
Problem:
Input: Array
Output: Nested Array

Definition and Rules:
- Half = Math.floor( length / 2 ) + 1
- If odd # elements -> slice from 0 to half, then slice from half
- If even # elements -> slice from 0 to half

Examples/Test Cases:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Data structure:
Array

Algorithm:
- Create half:
  - If even -> Floor of length / 2
  - Odd -> floor of length / 2 + 1
- Return slice 0 - half, slice half
*/

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  return [array.slice(0, half), array.slice(half)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]