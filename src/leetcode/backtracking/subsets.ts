function subsets1(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [];
  const isEnd = (startIndex: number) => startIndex === M;
  const backTracking = (
    startIndex: number,
    path: number[]
  ): void => {
    if (isEnd(startIndex)) {
      ret.push(path);
      return;
    }

    backTracking(
      startIndex + 1,
      path.concat(nums[startIndex])
    );
    backTracking(startIndex + 1, path.slice());
  };
  backTracking(0, []);
  return ret;
}

function subsets(nums: number[]): number[][] {
  const M = nums.length;
  const ret: number[][] = [[]];
  const isEnd = (startIndex: number) => startIndex === M;
  const backTracking = (
    startIndex: number,
    path: number[]
  ) => {
    if (isEnd(startIndex)) return;
    for (let i = startIndex; i < M; i++) {
      const newPath = path.concat(nums[i]);
      ret.push(newPath);
      backTracking(i + 1, newPath);
    }
  };
  backTracking(0, []);
  return ret;
}

console.log(subsets([0]));
