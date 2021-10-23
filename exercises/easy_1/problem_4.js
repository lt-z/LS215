/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
---
Problem:
Input: Strings
Output: Strings

Definitions and Rules:
- Receive two inputs from user: Bill amount and tip percentage.
- Indicate how tip percentage should be represented (percent)
- Ignore input validation

Examples/Test Cases:
Bill? $100
Tip Percentage? 10
->
Tip is $10.00
Total is $110.00

Bill? $500
Tip Percentage? 5
->
Tip is $25.00
Total is $525.00

Data Structure:
Keep as a Number.

Algorithm:
- Get inputs for bill and tip percentage.
- Calculate tip amount -> bill * (tip / 100)
- Calculate total bill -> tip + bill
- Return tip and total bill
*/
let readline = require('readline-sync');

function tipCalc() {
  console.log('What is the bill?');
  let bill = parseFloat(readline.prompt());
  console.log('What is the tip percentage?');
  let tipPercent = parseFloat(readline.prompt());

  let tipAmt = bill * (tipPercent / 100);
  let total = tipAmt + bill;

  console.log(`The tip is $${tipAmt.toFixed(2)}
The total is $${total.toFixed(2)}`);
}

tipCalc();