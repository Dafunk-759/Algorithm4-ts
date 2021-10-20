const exc = (nums: number[], l: number, r: number) => {
  [nums[l], nums[r]] = [nums[r], nums[l]];
};
const isOdd = (n: number) => n % 2 === 1;
const sortArrayByParity = (nums: number[]): number[] => {
  for (let l = 0, r = nums.length - 1; l < r; ) {
    if (isOdd(nums[l]) && isOdd(nums[r])) {
      r -= 1;
    } else if (isOdd(nums[l]) && !isOdd(nums[r])) {
      exc(nums, l, r);
      l += 1;
      r -= 1;
    } else if (!isOdd(nums[l]) && isOdd(nums[r])) {
      l += 1;
      r -= 1;
    } else {
      l += 1;
    }
  }
  return nums;
};
const isEven = (n: number) => !isOdd(n);
const sortArrayByParityS = (nums: number[]): number[] => {
  return nums.filter(isEven).concat(nums.filter(isOdd));
};
