/*
Write a function that displays an 8-pointed star in an nxn grid, where
is an odd integer that is supplied as an argument to the function.
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Problem:
Input: Number
Output: String

Definitions and Rules:
- Smallest input number is 7.
- Odd positive numbers only.
- Prongs have three stars.
  - Padding between stars at start = num - 3 / 2
  - Each iteration decreases by 1.
- # of rows = input number
- # of rows on top half -> input number - 1 / 2
- Center always have the input number of stars.

Examples/Test Cases:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

Data Structure:
An array then to a string when returned.

Algorithm:
- Create pad.
- Create empty array.
- Create top half from 1 to # of rows on top half:
  - Push -> idxpad + * + pad-idx + * + pad-idx+ *
- Push mid row -> * repeat times input number
- Reverse upper half and append to array.
- Return array.
*/

function star(num) {
  let pad = (num - 3) / 2;
  let array = [];

  for (let idx = 0; idx < (num - 1) / 2; idx += 1) {
    array.push(' '.repeat(idx) + '*' + ' '.repeat(pad - idx) + '*' + ' '.repeat(pad - idx) + '*');
  }
  array.push('*'.repeat(num));

  return array.concat(array.slice(0, -1).reverse()).join('\n');
}

console.log(star(7));
console.log(star(9));
console.log(star(13));

/*
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *
*/