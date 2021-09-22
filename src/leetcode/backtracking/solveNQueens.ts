function solveNQueens(n: number): string[][] {
  const ret: string[][] = [];
  const pathToAns = (path: number[]): string[] =>
    path.map((col) =>
      new Array(n)
        .fill(".")
        .map((item, i) => (i === col - 1 ? "Q" : item))
        .join("")
    );
  const isValid = (
    path: number[],
    col: number,
    row: number
  ): boolean =>
    path.every(
      (c, r) =>
        col !== c &&
        row !== r + 1 &&
        col + row !== c + r + 1 &&
        col - row !== c - r - 1
    );
  const backtracking = (path: number[], row: number) => {
    if (path.length === n) {
      ret.push(pathToAns(path));
      return;
    }
    for (let col = 1; col <= n; col++) {
      if (!isValid(path, col, row)) continue;
      backtracking(path.concat(col), row + 1);
    }
  };
  backtracking([], 1);
  return ret;
}
