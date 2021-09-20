//39
type BackTracking = (
  startIndex: number,
  sum: number,
  path: number[]
) => void;
function combinationSum(
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
      backTracking(
        i,
        sum + candidates[i],
        path.concat(candidates[i])
      );
    }
  };
  backTracking(0, 0, []);
  return ret;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));

export {};
