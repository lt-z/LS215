/*
Merge Sort

---
Problem
Input: Array
Output: Sorted Array w/ Merge sort

Definitions and Rules:
- Utilize merge sort by breaking down into sub arrays.

Examples/Test Cases:
See below.

Data Structure:
Array

Algorithm:
- Base case: if array.length === 1 return array
- Create half var: Math.ceil( length / 2)
- Get first half -> slice from 0 to half
- Get second half -> slice from half

- Recursion -> return merge of mergesort first, mergesort second.
*/

function mergeSort(array) {
  if (array.length === 1) return array;
  let half = Math.ceil(array.length / 2);
  let first = array.slice(0, half);
  let second = array.slice(half);

  return merge(mergeSort(first), mergeSort(second));
}

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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]