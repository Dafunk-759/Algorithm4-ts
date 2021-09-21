//90
function subsetsWithDup(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [[]];
  const isEnd = (i: number) => i === M;
  const isDup = (curr: number, start: number) =>
    curr > start && nums[curr] === nums[curr - 1];
  const backTacking = (
    startIndex: number,
    path: number[]
  ): void => {
    if (isEnd(startIndex)) return;
    for (let i = startIndex; i < M; i++) {
      if (isDup(i, startIndex)) continue;
      const newPath = path.concat(nums[i]);
      ret.push(newPath);
      backTacking(i + 1, newPath);
    }
  };
  nums.sort((a, b) => a - b);
  backTacking(0, []);
  return ret;
}

console.log(subsetsWithDup([0]));
