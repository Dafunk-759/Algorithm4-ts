function integerBreak(n: number): number {
  if (n < 4) return n - 1;
  const maxMul: number[] = [0, 1, 2, 3];
  const next = (nextNum:number):number => {
    let max = Number.NEGATIVE_INFINITY;
    const half = nextNum >> 1;
    for (let j = 1; j <= half; j++) {
      max = Math.max(max, maxMul[j] * maxMul[nextNum - j]);
    }
    return max;
  }
  for (let currNum = 4; currNum <= n; currNum++) {
    maxMul[currNum] = next(currNum);
  }
  return maxMul[n];
}
