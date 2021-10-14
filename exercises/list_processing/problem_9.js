/*
--(P)roblem--
Input: Number, Array of objects
Output: Array of objects

Explicit Requirements:
- Return array with transactions per input Number.

Implicit Requirements:
- If none, then empty array.
- Requires both inputs.
- First input must be a number (not string).


--(E)xamples--
101 -> [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

--(D)ata Structure--
Keep as an array.

--(A)lgorithm--
1. Filter the array based on each transaction's id === input id
2. Return filtered array.
*/

function transactionsFor(num, array) {
  return array.filter((item) => item.id === num);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]