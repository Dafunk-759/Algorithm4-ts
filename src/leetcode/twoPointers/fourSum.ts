function fourSum(
  nums: number[],
  target: number
): number[][] {
  const ret: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const newTarget = target - nums[i] - nums[j];
      for (
        let l = j + 1, r = nums.length - 1;
        l < r;
        newTarget > nums[l] + nums[r] ? (l += 1) : (r -= 1)
      ) {
        if (l > j + 1 && nums[l] === nums[l - 1]) continue;
        if (r < nums.length - 1 && nums[r] === nums[r + 1])
          continue;
        if (newTarget === nums[l] + nums[r])
          ret.push([nums[i], nums[j], nums[l], nums[r]]);
      }
    }
  }
  return ret;
}
