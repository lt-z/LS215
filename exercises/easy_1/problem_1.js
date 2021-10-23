/*
Log all odd numbers from 1 to 99, inclusive, to the console,
with each number on a separate line.

Problem:
Input: None
Output: undefined (console log)

Definitions and Rules:
- Log only odd numbers from 1 to 99.
- 1 and 99 are inclusive.
- Each number must be logged on a separate line.
- To get odd number -> number % 2 === 1.
- Or iterate by 2, starting with 1.

Examples/Test Cases: N/A

Data Structure:
Keep as number.

Algorithm:
- Create a for loop from 1 to 99 (inclusive), iterate by 2:
  - Push number to array.

*/

function oddNumbers() {
  for (let num = 1; num <= 99; num += 2) {
    console.log(num);
  }
}

oddNumbers();

/*
FURTHER EXPLORATION
Repeat this exercise with a technique different from the one that you used,
and different from the one provided. Also consider adding a way for the user
to specify the limits of the odd numbers logged to the console.

Problem:
Input: Number (lower limit), Number (upper limit)
Output: Numbers

Definitions and Rules:
- Start at lower limit and end at upper limit (inclusive)
- Check if current number is odd.
  - If true -> log number.
- Lower limit cannot be higher than upper limit or vice-versa.
- No negative numbers

Examples/Test Cases:
0 - 10 -> 1 3 5 7 9
33 - 44 -> 33 35 37 39 41 43
0 - 1 -> 1
1 - 1 -> 1

Data Structure:
Keep as number.

Algorithm:
- Iterate from lower limit to upper limit (inclusive), increment by 1:
  - If number is odd -> log number.
*/

function oddNumbers2(lower, upper) {
  for (let num = lower; num <= upper; num += 1) {
    if (num % 2 === 1) console.log(num);
  }
}

oddNumbers2(0, 10);
oddNumbers2(33, 44);
oddNumbers2(0, 1);
oddNumbers2(1, 1);
