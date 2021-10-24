/*
Write a function that counts the number of occurrences of each element
in a given array. Once counted, log each element alongside the number
of occurrences.

---
Problem:
Input: Array
Output: String

Definitions and Rules:
- Log each element with the number of occurrences from the input array.

Examples/Test Cases: N/A

Data Structure:
Object -> String

Algorithm:
- Create an object counter for the input array.
- Iterate through new object and log each item.
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let obj = array.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || 1;
    return obj;
  }, {});

  for (let vehicle in obj) {
    console.log(`${vehicle} => ${obj[vehicle]}`);
  }
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2