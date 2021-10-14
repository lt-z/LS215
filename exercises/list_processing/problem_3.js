/*
--(P)roblem--
Input: Two arrays
Output: Single array.

Explicit Requirements:
- Output is a combination of all number pairs between the two arrays.
- Element order of array is in ascending numerical order.
- No empty input arrays.

Implicit Requirements:
- Elements in arrays are integers.
- Elements are positive.

--(E)xamples--
[2, 4], [4, 3, 1, 2] -> [2, 4, 4, 6, 8, 8, 12, 16]

--(D)ata Structure--
Keep as an array.

--(A)lgorithm--
1. Create a new empty array.
2. Loop through first array:
    Loop through second array:
      Multiply element in 2nd array with element in 1st array.
      Push to new array.
3. Return sorted new array.
*/


function multiplyAllPairs(array1, array2) {
  let result = [];

  array1.forEach(item1 => {
    array2.forEach(item2 => {
      result.push(item1 * item2);
    });
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]