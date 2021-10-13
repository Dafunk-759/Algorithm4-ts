/**
 Do not return anything, modify nums in-place instead.
 */
function rotateSpace(nums: number[], k: number): void {
  k = k % nums.length;
  const ret = nums
    .slice(-k)
    .concat(nums.slice(0, nums.length - k));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ret[i];
  }
}
const reverse = (
  from: number,
  to: number,
  nums: number[]
): void => {
  for (let l = from, r = to; l < r; l++, r--) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }
};
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  reverse(0, n - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, n - 1, nums);
}
