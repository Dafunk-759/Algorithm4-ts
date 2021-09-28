function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let count = 0,
    currRange = 0,
    nextRange = 0;
  for (let i = 0; i <= currRange; i++) {
    nextRange = Math.max(i + nums[i], nextRange);
    if (i === currRange) {
      currRange = nextRange;
      count += 1;
    }
    if (currRange >= nums.length - 1) break;
  }
  return count;
}
