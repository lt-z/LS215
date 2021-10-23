/*
Write a function that takes a positive integer, n,
 as an argument and logs a right triangle whose sides
each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one
end at the lower-left of the triangle, and the other
end at the upper-right.

---
Problem:
Input: Number
Output: String

Definitions and Rules:
- Output rows is equal to input number.
- Output rows increment up 1 each row.
- Padding on left can be input number - index (start at 1).
- Star can be index.

Examples:
5 ->
    *
   **
  ***
 ****
*****

9 ->
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Data Structure:
An array then into a string.

Algorithm:
- Create empty result array.
- Create pad var.
- Loop from 1 to input number.
  - Push padding + *
- Return joined array.
*/

function triangle(number) {
  let array = [];
  let pad = number;

  for (let num = 1; num <= number; num += 1) {
    array.push(' '.repeat(pad - num) + '*'.repeat(num));
  }

  return array.join('\n');
}

console.log(triangle(5));
console.log(triangle(7));
console.log(triangle(9));
console.log(triangle(11));
