function numTrees(n: number): number {
  const nToKinds:number[] = [1, 1, 2];
  const next = (nextN:number):number => {
    let sum = 0;
    for(let i = 1; i <= nextN; i++) {
      const left = i - 1;
      const right = nextN - i;
      sum += nToKinds[left] * nToKinds[right];
    }
    return sum;
  }
  for(let currNum = 3; currNum <= n; currNum++) {
    nToKinds[currNum] = next(currNum);
  }
  return nToKinds[n];
}
