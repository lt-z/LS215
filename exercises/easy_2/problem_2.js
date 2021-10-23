
/*
Write a function that will take a short line of text, and write it to the console log within a box.
You may assume that the output will always fit in your browser window.
---
Problem:
Input: String
Output: String

Definitions and Rules:
- Create a box surrounding the text.
- Length of all rows of the strings should be input string length + 4 (2 on each side)
- Top and bottom box should be input string length + 2 '-' and '+'
-

Examples/Test Cases:
To boldly go where no one has gone before. ->
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

'' ->
+--+
|  |
|  |
|  |
+--+

Data Structure:
Array into String

Algorithm:
- Create an empty array.
- Create top and bottom row:
  - '+' + '-' for input string length + 2 + '+' + \n
- Create blank rows:
  - '|' + ' ' for input length + 2 + '|'
- Create mid row:
  - | + space + string + space + |
- Store as:
  - top, blank, mid, blank, bottom
- Return as string
*/

function logInBox(string) {
  let array = [];
  let topBottom = '+' + '-'.repeat(string.length + 2) + '+';
  let blank = '|' + ' '.repeat(string.length + 2) + '|';
  let mid = '| ' + string + ' |';

  array.push(topBottom, blank, mid, blank, topBottom);
  return array.join('\n');
}

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox('1234567890'));


/*
Further Exploration

Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted. For a real challenge, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box.
---
Problem:
Input: String, Number
Output: String

Definitions and Rules:
- If the width of string is > than the max width, wrap the word:
  - Determine how many lines are needed:
    - Loop through the input string and iterate by the max width.
    - Pad based on max width.
- Justify left, not justify middle

Examples/Test Cases:
To boldly go where no one has gone before., 10 ->
+------------+
|            |
| To boldly  |
|  go where  |
| no one has |
|  gone befo |
| e.         |
|            |
+------------+

Data Structure:
Array to String

Algorithm:
- Create a result array.
- Create top and bottom border based on max width.
- Create empty border based on max width.
- Create middle:
  - Loop through the string, iterate by max width
    - Append ->| + Slice string from current element to width + pad to width + |
  -Return joined result array
*/

function logInBoxWrap(string, width) {
  let array = [];
  if (!width) width = string.length + 4;

  let stringWidth = width - 4;
  let topBottom = '+' + '-'.repeat(width - 2) + '+';
  let blank = '|' + ' '.repeat(width - 2) + '|';

  array.push(topBottom, blank);

  for (let idx = 0; idx < string.length; idx += (stringWidth)) {
    array.push('| ' + string.slice(idx, idx + (stringWidth)).padEnd(stringWidth, ' ') + ' |');
  }
  array.push(blank, topBottom);
  return array.join('\n');
}

console.log(logInBoxWrap('To boldly go where no one has gone before.', 20));

