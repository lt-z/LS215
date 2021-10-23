/*
Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
---
Problem:
Input: Number
Output: String

Definitions and Rules:
- Receive input from user for a number greater than 0.
- Receive input from user for 's' for sum, 'p' for product.
- Return string that computes either the product from 1 to the input number
OR the sum from 1 to the input number.
- Ignore input validation.


Examples/Test Cases:
5, s -> (1 + 2 + 3 + 4 + 5) = 15
6, p -> (1 * 2 * 3 * 4 * 5 * 6) = 720
1, s -> (1) = 1

Data Structure:
Array

Algorithm:
- Receive input for number.
- Receive input for 's' or 'p'
- Create empty array.
- For loop from 1 to number:
  Push each number into array.
- if 's' is input:
  - Use reduce to return the sum of the array.
- Else
  - Return the product of the array
*/
let readline = require('readline-sync');

function consecInt() {
  let number = parseInt(readline.question('Please enter an integer greater than 0: '), 10);
  let operator = readline.question('Enter "s" to compute the sum or "p" to compute the product. ');
  let arr = [];

  for (let num = 1; num <= number; num += 1) {
    arr.push(num);
  }
  let result = 0;
  if (operator === 's') {
    result = arr.reduce((sum, num) => sum + num);
  } else if (operator === 'p') {
    result = arr.reduce((prod, num) => prod * num);
  } else {
    return 'Wrong operation!';
  }
  return `The ${operator === 's' ? 'sum' : 'product'} of the integers between 1 and ${number} is ${result}`;
}

consecInt();