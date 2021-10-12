/**
 Do not return anything, modify nums in-place instead.
 */
function sortColorsForce(nums: number[]): void {
  const count: number[] = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] += 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < count[0]) {
      nums[i] = 0;
    } else if (i >= count[0] && i < count[0] + count[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
}
const exc = (
  l: number,
  r: number,
  nums: number[]
): void => {
  [nums[l], nums[r]] = [nums[r], nums[l]];
};
function sortColorsOnePtr(nums: number[]): void {
  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      exc(head, i, nums);
      head += 1;
    }
  }
  for (let i = head; i < nums.length; i++) {
    if (nums[i] === 1) {
      exc(head, i, nums);
      head += 1;
    }
  }
}
function sortColorsTwoPtr(nums: number[]): void {
  let p0 = 0,
    p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      exc(p1, i, nums);
      p1 += 1;
    } else if (nums[i] === 0) {
      exc(p0, i, nums);
      if (p0 < p1) {
        exc(p1, i, nums);
      }
      p0 += 1;
      p1 += 1;
    }
  }
}
