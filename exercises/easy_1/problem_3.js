/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
---
Problem:
Input: Two strings (via readlineSync)
Output: String (of area)

Definitions and Rules:
- User provides 2 inputs as strings
- Return the area in both square meters and square feet.
- 1 square meter = 10.7639 square feet
- Both numbers should be over 0.

Examples:
Length - 10, Width - 7 -> 70 square meters (753.47 square feet)
Length - 5, Width - 5 -> 25 square meters (269.10 square feet)

Data Structure:
Keep as a number, then return as a string.

Algorithm:
- Receive inputs via readline sync.
- Calculate area in square meters
- Convert to square feet.
- Return area in both units.
*/
let readline = require('readline-sync');
const SM_TO_SF = 10.7639;

function roomArea() {
  console.log('Enter length of the room in meters:');
  let length = Number(readline.prompt());
  console.log('Enter width of the room in meters:');
  let width = Number(readline.prompt());

  let smArea = length * width;
  let sfArea = SM_TO_SF * smArea;
  return `The area of the room is ${smArea.toFixed(2)} square meters (${sfArea.toFixed(2)} square feet).`;
}

// roomArea();

// FURTHER EXPLORATION

function roomArea2() {
  console.log('Please input unit type (meters or feet)');
  let unit = Number(readline.prompt());
  console.log('Enter length of the room:');
  let length = Number(readline.prompt());
  console.log('Enter width of the room in meters:');
  let width = Number(readline.prompt());

  if (unit === 'meters') {
    let smArea = length * width;
    let sfArea = SM_TO_SF * smArea;
    return `The area of the room is ${smArea.toFixed(2)} square meters (${sfArea.toFixed(2)} square feet).`;
  } else {
    let sfArea = length * width;
    let smArea = sfArea / SM_TO_SF;
    return `The area of the room is ${sfArea.toFixed(2)} square feet (${smArea.toFixed(2)} square meters).`;

  }
}

roomArea2();