const exc = (nums: number[], l: number, r: number) => {
  [nums[l], nums[r]] = [nums[r], nums[l]];
};
const findLeft = (nums: number[]) => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) return i;
  }
  return -1;
};
const findRight = (nums: number[], left: number) => {
  for (let i = nums.length - 1; i > left; i--) {
    if (nums[i] > nums[left]) return i;
  }
  throw new Error("never");
};
const reverse = (
  nums: number[],
  from: number,
  to: number
): void => {
  for (let l = from, r = to; l < r; l++, r--) {
    exc(nums, l, r);
  }
};
const MAX_32INT = 2 ** 31 - 1;
function nextGreaterElement(n: number): number {
  const nums = String(n).split("").map(Number);
  const left = findLeft(nums);
  if (left === -1) return -1;
  const right = findRight(nums, left);
  exc(nums, left, right);
  reverse(nums, left + 1, nums.length - 1);
  const ret = Number(nums.join(""));
  if (ret > MAX_32INT) return -1;
  return ret;
}
