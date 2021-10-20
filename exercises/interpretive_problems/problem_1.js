/*
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this process
until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after n repetitions.

Problem:
Input: Number
Output: Array

Description and Rules:
- All light starts off as off.
- Lights are either on or off (boolean)
- Number lights is always 1+.
- Each successive pass increments +1.
- Input number is number of lights and number of increments.

Examples/Test Cases:
1 -> [1]
Pass 0 - [false]
Pass 1 - [true]

2 -> [2]
Pass 0 - [false, false]
Pass 1 - [true, true]
Pass 2 - [true, false]

3 -> [1]
Pass 0 - [false, false, false]
Pass 1 - [true, true, true]
Pass 2 - [true, false, true]
Pass 3 - [true, false, false]
           0  ,   1  ,   2

5-> [1, 4]
Pass 0 - [false, false, false, false, false]
Pass 1 - [true, true, true, true, true]
Pass 2 - [true, false, true, false, true]
Pass 3 - [true, false, false, false, true]
Pass 4 - [true, false, false, true, true]
Pass 5 - [true, false, false, true, false]

Data Structure:
An array as the data structure.

Algorithm:
- Create an array of the # of switches and fill with false -> pass 0.

- Create a for loop incrementing from 1 to # of switches: (this is each pass)
  - Create an inner loop starting 0 to # switches:
    - If the current index + 1 modulo pass# === 0 -> (actual number 0 -> 1 or 54 -> 55)
      - If current num is false -> true
      - Else -> false
- Map to include idx + 1, then filter out the false lights, map to remove boolean.
*/

function lightsOn(switches) {
  let array = Array(switches).fill(false);

  for (let pass = 1; pass <= switches; pass += 1) {
    for (let idx2 = 0; idx2 < switches; idx2 += 1) {
      if ((idx2 + 1) % pass === 0) {
        if (array[idx2] === false) {
          array[idx2] = true;
        } else {
          array[idx2] = false;
        }
      }
    }
    console.log(array);
  }

  return array.map((num, idx) => [num, idx + 1])
    .filter(item => item[0] === true)
    .map(num => num[1]);
}

console.log(lightsOn(2));        // [2]
console.log(lightsOn(3));        // [1]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
