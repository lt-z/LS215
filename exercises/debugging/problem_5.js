
/*
Range

---
Problem:
Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

*/

function range(start, end) {
  if (!end) {
    end = start;
    start = 0;
  }
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(-5, 0));

// if (!end) would not work for values that are falsy. So if we wanted to iterate from -5 to 0, it would not work.
// Lines 3 and 4 are swapped. Since start equals 0, end will also equal to 0.
