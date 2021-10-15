/*
--(P)roblem--
Input: String
Output: Object

Explicit Requirements:
- Returned object has three properties: lowercase, uppercase, and neither
- Number is counted as 'neither'.

Implicit Requirements:
- Empty string does not count as anything.
- Space is counted under 'neither'

--(E)xamples--
'abCdef 123' -> { lowercase: 5, uppercase: 1, neither: 4 }

--(D)ata Structure--
Keep as a string, use counters to insert into an object.

--(A)lgorithm--
1. Create three counters.
2. Iterate through the string:
  If character is uppercase -> +1 uppercase
  If character is lowercase -> +1 lowercase
  Else -> +1 neither
3. Return object with counters as properties.
*/

function letterCaseCount(string) {
  let [ lowercase, uppercase, neither ] = [0, 0, 0];
  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[A-Z]/g.test(string[idx])) {
      uppercase += 1;
    } else if (/[a-z]/g.test(string[idx])) {
      lowercase += 1;
    } else {
      neither += 1;
    }
  }
  return {
    lowercase,
    uppercase,
    neither
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
