import * as util from "../../util/indexNode.js";

function generateMatrix(n: number): number[][] {
  const matrix: number[][] = new Array<number[]>(n)
    .fill([])
    .map(() => new Array<number>(n).fill(0));
  const maxNum = n * n;
  let currNum = 1,
    r = 0,
    c = 0,
    directIndex = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (currNum <= maxNum) {
    matrix[r][c] = currNum;
    currNum++;
    const nextRow = r + directions[directIndex][0],
      nextColumn = c + directions[directIndex][1];
    if (
      nextRow >= n ||
      nextColumn >= n ||
      nextRow < 0 ||
      nextColumn < 0 ||
      matrix[nextRow][nextColumn] !== 0
    ) {
      directIndex = (directIndex + 1) % 4;
    }
    r = r + directions[directIndex][0];
    c = c + directions[directIndex][1];
  }

  return matrix;
}

util.test(
  generateMatrix,
  [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ],
  3
);
util.test(generateMatrix, [[1]], 1);
