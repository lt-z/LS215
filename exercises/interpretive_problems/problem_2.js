
/*
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

Input: Number
Output: String

Definitions and Rules:
- Input is always an odd integer.
- Number of rows is equal to the input number.
- Padding is needed to center each row.
  - Padding is equal to Floor of (Input Num / 2)
  - Padding -1 each increment.
- Stars starts at 1 and increments by 2.

Data Structure:
Array to String.

Examples/Test Cases:
1 ->
*

3 ->
 *
***
 *

5 ->
  *
 ***
*****
 ***
  *

5 ->
  *
 * *
*   *
 * *
  *

7 ->
123*
12* *
1*   *
*     *
 *****
  ***
   *

Algorithm:
- Create half = Lower bound of (input number / 2)
- Create padding = half
- Create empty result array.
- Create centerPad = 1

- Iterate from 1 to input number, iterate by 2:
  - If (1) -> pad + * + pad
  - If
  - Else -> Padding + * + centerPad + * + Padding
      centerPad += 1
  - padding -= 1
- Current current concat with reverse bottom function.
- Return array and join.
-

Copy and reverse top half ->
  - Slice array from 0 to -1 and reverse
*/

function diamond(number) {
  let half = Math.floor(number / 2);
  let pad = half;
  let centerPad = 1;
  let array = [];

  for (let num = 1; num <= number; num += 2) {
    if (num === 1) {
      array.push(' '.repeat(pad) + '*' + ' '.repeat(pad));
    } else if (num === 2) {
      array.push(' '.repeat(pad) + '*' + ' '.repeat(centerPad) + '*' + ' '.repeat(pad));
      centerPad += 1;
    } else {
      array.push(' '.repeat(pad) + '*' + ' '.repeat(centerPad) + '*' + ' '.repeat(pad));
      centerPad += 2;
    }
    pad -= 1;
  }
  return array.concat(reverseTop(array)).join('\n');
}

function reverseTop(array) {
  return array.slice(0, -1).reverse();
}


console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(7));
console.log(diamond(9));