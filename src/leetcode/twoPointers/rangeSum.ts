const toRangeSumArr = (nums: number[]) => {
  const ret: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (
      let j = i, curr = nums[i];
      j < nums.length;
      j++, curr += nums[j]
    ) {
      ret.push(curr);
    }
  }
  return ret;
};
const toSum = (acc: number, curr: number) =>
  (acc + curr) % (10 ** 9 + 7);
const byAsc = (a: number, b: number) => a - b;
const rangeSum = (
  nums: number[],
  n: number,
  left: number,
  right: number
): number => {
  return toRangeSumArr(nums)
    .sort(byAsc)
    .slice(left - 1, right)
    .reduce(toSum);
};
