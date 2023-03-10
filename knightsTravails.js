const knightOffsets = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

const knightMoves = (startCoords, endCoords) => {
  let squareCoords = [];

  squareCoords.push(startCoords);

  if (JSON.stringify(endCoords) === JSON.stringify(startCoords)) {
    // cannot use this method for legitamate array comparison
    // correct way would be to loop through each array item and compare
    return "Already there!";
  }

  let newCoords = knightOffsets
    .map((Offset) => {
      let x = startCoords[0] + Offset[0];
      let y = startCoords[1] + Offset[1];
      if (x > 0 && x < 8 && y > 0 && y < 8) {
        return [x, y];
      }
    })
    .filter((x) => x !== undefined);

  console.log(newCoords);
};

// array to store possible coords (x > 0 && x < 8 && y > 0 && y < 8)
console.log(knightMoves([3, 3], [1, 2]));
