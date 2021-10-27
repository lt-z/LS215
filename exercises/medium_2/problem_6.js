/*
Bubble Sort
A bubble sort works by making multiple passes (iterations) through an array.
On each pass, the two values of each pair of consecutive elements are compared.
If the first value is greater than the second, the two elements are swapped.
This process is repeated until a complete pass is made without performing any
swaps — at which point the array is completely sorted.

---
Problem:
Input: Array
Output: Array

Definitions and Rules:
- Compares two numbers with each other
- If first value > second value -> Swap
- If no swaps -> return array
- Sorting is done in-place.
- Array always includes at least 2 elements.

Examples/Test Cases:
[5, 3] -> [3, 5]
[6, 2, 7, 1, 4] -> [1, 2, 4, 6, 7]
['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'] ->
["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

Data Structure:
Array

Algorithm:
- While true:
  - Create swap variable = false;
  - Iterate through the array - 1:
    - If current number > next number:
      - Swap = true
  if swap = false -> return array.
*/

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapped = true;
      }
    }
    if (swapped === false) return array;
  }
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]