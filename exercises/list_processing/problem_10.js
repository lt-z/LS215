/*
--(P)roblem--
Input: Number, Array of objects
Output: Boolean

Explicit Requirements:
- Return boolean based on item availability.
- Item availability based on `movement` and `quantity` values.

Implicit Requirements:
- If not a valid id, return false.

--(E)xamples--
101 -> false
105 -> true

--(D)ata Structure--
Structure should be an array, then convert into a boolean.

--(A)lgorithm--
1. Get list of transactions using `transactionsFor` function.
2. Iterate through list based on `movement` and `quantity` values:
    If movement === 'in' -> quantity += number.
    Else --> quantity -= number.
3. If quantity > 0, return `true`. Else return `false`.
*/


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

function transactionsFor(num, array) {
  return array.filter((item) => item.id === num);
}

function isItemAvailable(num, transactions) {
  let itemList = transactionsFor(num, transactions);
  let quantity = itemList.reduce((quant, item) => {
    if (item.movement === 'in') {
      quant += item.quantity;
    } else {
      quant -= item.quantity;
    }
    return quant;
  }, 0);
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
