function permute(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [];
  const backTrack = (path: Set<number>): void => {
    if (path.size === M) {
      ret.push(Array.from(path));
      return;
    }

    for (let i = 0; i < M; i++) {
      if (path.has(nums[i])) continue;
      backTrack(new Set(path).add(nums[i]));
    }
  };
  backTrack(new Set());
  return ret;
}

console.log(permute([1]));
