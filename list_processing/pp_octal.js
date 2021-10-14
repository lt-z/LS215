function octalToDecimal(numberString) {
  const array = numberString.split('').map(Number).reverse();
  return array.reduce((sum, num, idx) => (sum += num * 8 ** idx));
}

console.log(octalToDecimal('1')); // 1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); // 9
