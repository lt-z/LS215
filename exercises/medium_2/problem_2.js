const { setDefaultOptions } = require("readline-sync");

/*
Write a function that takes the lengths of the three sides of a
triangle as arguments and returns one of the following four strings
representing the triangle's classification: 'equilateral', 'isosceles'
, 'scalene', or 'invalid'.

---
Problem:
Input: 3 Numbers
Output: String

Definitions and Rules:
- A valid triangle is:
  - sum of lengths on shortest 2 sides > length of longest side.
  - all sides > 0
- equilateral - all sides equal
- isosceles - two equal, third different
- scalene - all different

Examples/Test Cases:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Data Structure:
Number -> String

Algorithm:
- Determine if valid triangle:
  - Place sides in an array and sort.
  - if first two sides > last side and all sides > 0 -> valid
- Determine triangle type:
  - If all sides are equal (array.every) -> equilateral
  - If two sides are equal (array[0] === array[1] or array[0] === array[2] or array[1] === array[2])
  - Else -> scalene
*/
function triangle(side1, side2, side3) {
  let array = [side1, side2, side3];

  if (validTriangle(array)) {
    if (array.every(side => array[0] === side)) {
      return 'Equilateral';
    } else if (array.filter(side => array[0] === side).length === 2 ||
        array.filter(side => array[1] === side).length === 2) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }
  return 'Invalid';
}

function validTriangle(array) {
  let sides = array.sort((a, b) => a - b);
  return (sides[0] + sides[1] > sides[2] && sides.every(side => side > 0));
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"