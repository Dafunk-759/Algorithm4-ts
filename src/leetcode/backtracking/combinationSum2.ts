//40
type BackTracking = (
  startIndex: number,
  sum: number,
  path: number[]
) => void;
function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const ret: number[][] = [];
  const N = candidates.length;
  const backTracking: BackTracking = (
    startIndex,
    sum,
    path
  ) => {
    if (sum > target) return;
    if (sum === target) {
      ret.push(path);
      return;
    }

    for (let i = startIndex; i < N; i++) {
      if (
        i > startIndex &&
        candidates[i] === candidates[i - 1]
      )
        continue;
      backTracking(
        i + 1,
        sum + candidates[i],
        path.concat(candidates[i])
      );
    }
  };
  candidates.sort((a, b) => a - b);
  backTracking(0, 0, []);
  return ret;
}

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
