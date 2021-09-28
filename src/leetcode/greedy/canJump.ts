//greedy
function canJump(nums: number[]): boolean {
  let range = 0;
  if (nums.length === 1) return true;
  for (let i = 0; i <= range; i++) {
    range = Math.max(i + nums[i], range);
    if (range >= nums.length - 1) return true;
  }
  return false;
}
