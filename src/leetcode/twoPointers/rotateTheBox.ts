const rotate = (m: string[][]) => {
  const M = m.length;
  const N = m[0].length;
  const ret: string[][] = new Array(N)
    .fill(0)
    .map((_) => new Array(M).fill(""));
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      ret[j][M - 1 - i] = m[i][j];
    }
  }
  return ret;
};
const toSink = (row: string[]) => {
  row = row.slice();
  for (let r = 0, l = 0; r < row.length; r++) {
    if (row[r] === ".") {
      [row[l], row[r]] = [row[r], row[l]];
      l++;
    } else if (row[r] === "*") {
      l = r + 1;
    }
  }
  return row;
};
const rotateTheBox = (box: string[][]): string[][] => {
  return rotate(box.map(toSink));
};
