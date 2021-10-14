const rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(array) {
  const areas = array.map((rect) => rect[0] * rect[1]);
  return areas.reduce((sum, area) => sum + area);
}

console.log(totalArea(rectangles)); // 141

function totalSquareArea(array) {
  const squares = array.filter((rect) => rect[0] === rect[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles)); // 121
