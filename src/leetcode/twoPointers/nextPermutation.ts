/**
 Do not return anything, modify nums in-place instead.
 */
const exc = (
  l: number,
  r: number,
  nums: number[]
): void => {
  [nums[l], nums[r]] = [nums[r], nums[l]];
};
const findLeft = (nums: number[]): number => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) return i;
  }
  return -1;
};
const findRight = (
  leftIndex: number,
  nums: number[]
): number => {
  for (let r = nums.length - 1; r > leftIndex; r--) {
    if (nums[r] > nums[leftIndex]) return r;
  }
  return leftIndex;
};
const reverse = (
  from: number,
  to: number,
  nums: number[]
): void => {
  for (let l = from, r = to; l < r; l++, r--) {
    exc(l, r, nums);
  }
};
function nextPermutation(nums: number[]): void {
  const left = findLeft(nums);
  if (left === -1) {
    reverse(0, nums.length - 1, nums);
    return;
  }
  const right = findRight(left, nums);
  exc(left, right, nums);
  reverse(left + 1, nums.length - 1, nums);
}
