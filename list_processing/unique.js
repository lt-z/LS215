/*
Determine if a string has any character that appears more than once.
Only return true if all chars are unique.
Ignore spaces and is case-insensitive.
*/

function isAllUnique(string) {
  let str = string.toLowerCase().replace(/\s/g, '');
  let seen = {};

  for (let idx = 0; idx < str.length; idx += 1) {
    if (seen[str[idx]]) return false;
    seen[str[idx]] = true;
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true