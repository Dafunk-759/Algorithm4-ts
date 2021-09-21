function findSubsequences(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [];
  const isEnd = (i: number) => i === M;
  const isGreater = (i: number, path: number[]) => {
    if (path.length === 0) return true;
    return nums[i] >= path[path.length - 1];
  };
  const isDup = (curr: number, start: number) => {
    if (curr <= start) return false;
    return nums.slice(start, curr).includes(nums[curr]);
  };
  const backTracking = (
    startIndex: number,
    path: number[]
  ): void => {
    if (isEnd(startIndex)) return;
    for (let i = startIndex; i < M; i++) {
      if (!isGreater(i, path)) continue;
      if (isDup(i, startIndex)) continue;
      const newPath = path.concat(nums[i]);
      if (newPath.length >= 2) ret.push(newPath);
      backTracking(i + 1, newPath);
    }
  };
  backTracking(0, []);
  return ret;
}

console.log(findSubsequences([4, 6, 7, 7]));
