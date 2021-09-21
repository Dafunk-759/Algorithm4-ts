function permuteUnique(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [];
  const backtracking = (
    path: number[],
    used: boolean[]
  ): void => {
    if (path.length === M) {
      ret.push(path);
      return;
    }
    for (let i = 0; i < M; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])
        continue;
      backtracking(
        path.concat(nums[i]),
        used.map((item, index) =>
          index === i ? true : item
        )
      );
    }
  };
  nums.sort((a, b) => a - b);
  backtracking([], new Array(M).fill(false));
  return ret;
}

console.log(permuteUnique([1, 1, 2]));
