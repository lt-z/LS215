/*
--(P)roblem--
Input: Nested array.
Output: Single array.

Explicit Requirements:
- Output array will show each fruit
  name the number of times in the nested array.


Implicit Requirements:
- Within the nested array, first element is a string
  second element is a number.
- Input nested array is one or more.

--(E)xamples--
[['apple', 3], ['orange', 2]] -> ['apple', 'apple', 'apple', 'orange', 'orange']

--(D)ata Structure--
Keep as an array.

--(A)lgorithm--
1. Create a new empty array.
2. Iterate through the input array:
  Create a for loop up to the quantity number:
    push element into new array.
3. Return array.
*/

function buyFruit(array) {
  let result = [];

  array.forEach(item => {
    for (let idx = 0; idx < item[1]; idx += 1) {
      result.push(item[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruitMap(array) {
  return array.map(item => {
    let result = [];
    for (let idx = 0; idx < item[1]; idx += 1) {
      result.push(item[0]);
    }
    return result;
  }).flat();
}

console.log(buyFruitMap([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]