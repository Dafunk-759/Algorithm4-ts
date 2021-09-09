import * as util from "../../util/indexNode.js";

function spiralOrder(matrix: number[][]): number[] {
  let r = 0,
    c = 0,
    directionIndex = 0,
    currNum = 1;
  const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ],
    m = matrix.length,
    n = matrix[0].length,
    maxNum = m * n,
    ret: number[] = [],
    marked: number[][] = new Array(m)
      .fill(0)
      .map(() => new Array(n).fill(0));
  while (currNum <= maxNum) {
    ret.push(matrix[r][c]);
    marked[r][c] = 1;
    currNum++;
    const nextRow = r + directions[directionIndex][0],
      nextColumn = c + directions[directionIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= m ||
      nextColumn < 0 ||
      nextColumn >= n ||
      marked[nextRow][nextColumn] !== 0
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    r = r + directions[directionIndex][0];
    c = c + directions[directionIndex][1];
  }
  return ret;
}

util.test(
  spiralOrder,
  [1, 2, 3, 6, 9, 8, 7, 4, 5],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
util.test(
  spiralOrder,
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]
);
