const toPairs =
  (profit: number[]) => (d: number, i: number) => ({
    difficulty: d,
    profit: profit[i],
  });
const maxProfitAssignment = (
  difficulty: number[],
  profit: number[],
  worker: number[]
): number => {
  const paris = difficulty.map(toPairs(profit));
  paris.sort((a, b) => a.difficulty - b.difficulty);
  worker.sort((a, b) => a - b);
  let currMax = 0;
  let ret = 0;
  let i = 0;
  for (const skill of worker) {
    while (
      i < paris.length &&
      paris[i].difficulty <= skill
    ) {
      currMax = Math.max(currMax, paris[i].profit);
      i += 1;
    }
    ret += currMax;
  }
  return ret;
};
