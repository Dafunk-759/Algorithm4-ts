const del = (index: number, nums: number[]): void => {
  for (let i = index + 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums.length -= 1;
};
function removeDuplicatesDel(nums: number[]): number {
  for (let i = 2; i < nums.length; i++) {
    if (
      nums[i] === nums[i - 1] &&
      nums[i] === nums[i - 2]
    ) {
      del(i, nums);
      i -= 1;
    }
  }
  return nums.length;
}
const shouldDel = (
  curr: number,
  slow: number,
  nums: number[]
) =>
  nums[curr] === nums[slow - 1] &&
  nums[curr] === nums[slow - 2];

function removeDuplicatesTwoPtr(nums: number[]): number {
  let slow = 2;
  for (let i = 2; i < nums.length; i++) {
    if (shouldDel(i, slow, nums)) continue;
    nums[slow] = nums[i];
    slow += 1;
  }
  return slow;
}
