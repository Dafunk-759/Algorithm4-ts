const makePathMap = (obstacleGrid: number[][]) => {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const map: number[][] = obstacleGrid.map((cArr, r) => {
    return cArr.map((ob, c) => {
      if (ob === 1) return 0;
      if (c === 0 || r === 0) return 1;
      return -1;
    });
  });
  for (let r = 1; r < row; r++) {
    if (map[r - 1][0] === 0) {
      map[r][0] = 0;
    }
  }
  for (let c = 1; c < col; c++) {
    if (map[0][c - 1] === 0) {
      map[0][c] = 0;
    }
  }
  const getPaths = (r: number, c: number): number => {
    if (!(r >= 1 && r <= row)) throw new Error("bad row");
    if (!(c >= 1 && c <= col)) throw new Error("bad col");
    return map[r - 1][c - 1];
  };
  const setPaths = (
    r: number,
    c: number,
    value: number
  ): void => {
    if (!(r >= 1 && r <= row)) throw new Error("bad row");
    if (!(c >= 1 && c <= col)) throw new Error("bad col");
    if (getPaths(r, c) === 0) return;
    map[r - 1][c - 1] = value;
  };
  return {
    getPaths,
    setPaths,
  };
};
function uniquePathsWithObstacles(
  obstacleGrid: number[][]
): number {
  const ROW = obstacleGrid.length;
  const COL = obstacleGrid[0].length;
  const pMap = makePathMap(obstacleGrid);
  for (let r = 2; r <= ROW; r++) {
    for (let c = 2; c <= COL; c++) {
      pMap.setPaths(
        r,
        c,
        pMap.getPaths(r - 1, c) + pMap.getPaths(r, c - 1)
      );
    }
  }
  return pMap.getPaths(ROW, COL);
}
