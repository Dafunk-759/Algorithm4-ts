const squareList = (c: number) => {
  const ret: number[] = [];
  for (let i = 0; i * i <= c; i++) {
    ret.push(i * i);
  }
  return ret;
};
const twoSum = (nums: number[], target: number) => {
  for (let l = 0, r = nums.length - 1; l <= r; ) {
    const sum = nums[l] + nums[r];
    if (sum > target) r--;
    else if (sum < target) l++;
    else return true;
  }
  return false;
};
const judgeSquareSum = (c: number): boolean => {
  return twoSum(squareList(c), c);
};
