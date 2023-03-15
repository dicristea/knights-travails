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

let nextNodes = (node) =>
  knightOffsets
    .map((offset) => {
      const x = node.currentCoord[0] + offset[0];
      const y = node.currentCoord[1] + offset[1];
      if (x >= 0 && x < 8 && y >= 0 && y < 8) {
        return {
          previousNode: node,
          currentCoord: [x, y],
        };
      }
    })
    .filter((x) => x);

let buildPath = (node) => {
  const nodes = [];

  while (node.previousNode !== null) {
    nodes.push(node.currentCoord);
    node = node.previousNode;
  }

  nodes.push(node.currentCoord);

  return nodes.reverse();
};

const knightMoves = (startCoords, endCoords) => {
  const start = JSON.stringify(startCoords);
  const end = JSON.stringify(endCoords);

  if (end === start) {
    return startCoords;
  }

  let queue = [
    {
      previousNode: null,
      currentCoord: startCoords,
    },
  ];

  const seenCoordinates = new Set();

  while (queue) {
    const node = queue.shift();
    const { previousNode, currentCoord } = node; // deconstructing
    const coordJSON = JSON.stringify(currentCoord);

    if (!seenCoordinates.has(coordJSON)) {
      seenCoordinates.add(coordJSON);

      if (coordJSON === end) {
        return buildPath(node);
      } else {
        const children = nextNodes(node);
        queue = [...queue, ...children];
      }
    }
  }
};

const path = knightMoves([0, 0], [7, 7]);

console.log(path);

console.log(
  `You've made it in ${path.length - 1} moves! Here's your path: ${path.map(
    (item) => ` [${item}]`
  )}`
);
