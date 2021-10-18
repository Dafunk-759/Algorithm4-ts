const mkBs =
  (nums: number[]) =>
  (target: number, l: number, r: number) => {
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (nums[mid] < target) l = mid + 1;
      else r = mid - 1;
    }
    return l;
  };
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const bs = mkBs(nums);
  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const k = bs(
        nums[i] + nums[j],
        j + 1,
        nums.length - 1
      );
      ret += k - j - 1;
    }
  }
  return ret;
}
