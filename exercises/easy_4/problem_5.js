/*
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both array
arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and
that they have the same number of elements.

---
Problem:
Input: Two arrays
Output: Array

Definitions and Rules:
- Both arrays are non-empty and have the same # of elements.
- Alternate each element in the array.

Examples/Test Cases:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave([1, 2, 3], [4, 5, 6]);    // [1, 4, 2, 5, 3, 6]
interleave([1], [10]);    // [1, 10]

Data Structure:
Array

Algorithm:
- Reduce first array and include index ->
  - Push current item + array2's item
  - Return new array
*/

function interleave(array1, array2) {
  return array1.reduce((arr, item, index) => {
    arr.push(item, array2[index]);
    return arr;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], [4, 5, 6]));    // [1, 4, 2, 5, 3, 6]
console.log(interleave([1], [10]));    // [1, 10]