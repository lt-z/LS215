/*
Write a function that takes two sorted arrays as arguments
and returns a new array that contains all the elements from
both input arrays in sorted order.

Your solution should not mutate the input arrays.

---
Problem
Input: Two sorted arrays.
Output: Single sorted array.

Definitions and Rules:
- Create a new array from the two arrays that is a
sorted version of both arrays.

Examples/Test Cases:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

Data Structure:
Array

Algorithm:
- Create new result array.
- Add both arrays together to get length
- Create counters for both arrays.

- For loop through length of cumulated array:
  - If array1[counter1] <= other array2[counter2] or if array2[count2] is empty:
    - push array1[counter1]
    - counter for array 1 += 1
  - If array1[counter1] > array2[counter2]
    - push array2[counter2]
    - counter for array2 += 1
- Return new array
*/
function merge(array1, array2) {
  let result = [];
  let length = array1.length + array2.length;
  let [counter1, counter2] = [0, 0];

  for (let num = 0; num < length; num += 1) {
    if (array1[counter1] <= array2[counter2] ||
        array2[counter2] === undefined) {
      result.push(array1[counter1]);
      counter1 += 1;
    } else {
      result.push(array2[counter2]);
      counter2 += 1;
    }
  }
  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

function merge2(array1, array2) {
  let result = [];
  let arr1 = array1.slice();
  let arr2 = array2.slice();

  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  }

  return result.concat(arr1.length === 0 ? arr2 : arr1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge2([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge2([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge2([1, 4, 5], []));             // [1, 4, 5]
