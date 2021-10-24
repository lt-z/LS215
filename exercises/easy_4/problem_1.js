/*
Write a function that takes a floating point number representing an
angle between 0 and 360 degrees and returns a string representing that
angle in degrees, minutes, and seconds. You should use a degree symbol
(˚) to represent degrees, a single quote (') to represent minutes, and
a double quote (") to represent seconds. There are 60 minutes in a degree,
and 60 seconds in a minute.
---
Problem:
Input:  Number
Output: String

Definition and Rules:
- 60 minutes in a degree.
- 60 seconds in a minute.
- .73 -> .73 * 60 = 43.8 (43 mintues) -> 0.8 * 60 = 48 seconds
- Need to math floor the minutes.

Examples/Test Cases:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Data Structure:
Number -> Array -> String

Algorithm:
- Find degree -> remove everything after decimal
- Find minutes -> Floor of (number - degree) * 60
- Find seconds -> (Numer - degree) * 60) - minutes * 60 -> round
- Pad 0s to each number.
- return numbers.
*/

function dms(number) {
  let degree = Math.floor(number);
  let minutes = Math.floor((number - degree)  * 60);
  let seconds = Math.round((((number - degree)  * 60) - minutes) * 60);

  return `${pad(degree)}°${pad(minutes)}'${pad(seconds)}"`;
}

function pad(number) {
  return String(number).padStart(2, '0');
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Further Exploration
/*
Since degrees are normally restricted to the range 0-360,
can you modify the code so it returns a value in the appropriate
range when the input is less than 0 or greater than 360?
*/

function dms2(number) {
  while (number > 360 || number < 0) {
    if (number > 360) {
      number -= 360;
    } else {
      number += 360;
    }
  }

  let degree = Math.floor(number);
  let minutes = Math.floor((number - degree)  * 60);
  let seconds = Math.round((((number - degree)  * 60) - minutes) * 60);

  return `${pad(degree)}°${pad(minutes)}'${pad(seconds)}"`;
}

console.log(dms2(-1));   // 359°00'00"
console.log(dms2(400));  // 40°00'00"
console.log(dms2(-40));  // 320°00'00"
console.log(dms2(-420)); // 300°00'00"