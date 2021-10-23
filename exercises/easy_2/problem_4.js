/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8,
13, 21, ...) such that the first two numbers are 1 by definition,
and each subsequent number is the sum of the two previous numbers.
Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series,
 but the results grow at an incredibly rapid rate. For example,
 the 100th Fibonacci number is 354,224,848,179,261,915,075—that's
 enormous, especially considering that it takes six iterations just
 to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first
 Fibonacci number that has the number of digits specified by the
 argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than
 or equal to 2.
---
Problem:
Input: Number
Output Number

Definitions and Rules:
- Index of fibonnaci starts at 1.
- Input number is a number greater or = to 2.
- Fibonnaci series starts from 1, 1, 2, 3, 5, 8, 13...

Examples/Test Cases:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

Data Structure:
Keep as a number.

Algorithm:
- Create var to store result.
- Create 2 element array to store fib numbers.
- While the length of the second number is < input number:
  - Go through fibonnaci numbers.
    - [fib1, fib2] = [fib2, fib1 + fib2]
    - result += 1
- Return result
*/

function findFibonacciIndexByLength(number) {
  let result = 2n;
  let fib = [1n, 1n];

  while (String(fib[1]).length < number) {
    [fib[0], fib[1]] = [fib[1], fib[0] + fib[1]];
    result += 1n;
  }

  return result;
}

console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.