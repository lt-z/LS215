function isBalanced(string) {
  let array = string.split('');
  let count = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === '(') {
      count += 1;
    } else if (array[idx] === ')') {
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false