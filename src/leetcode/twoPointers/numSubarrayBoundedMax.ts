const toRange = (l: number, r: number) => (n: number) => {
  if (n < l) return 0;
  if (n > r) return 2;
  return 1;
};
const count = (bound: number, nums: number[]) => {
  let curr = 0,
    ret = 0;
  for (const n of nums) {
    curr = n >= bound ? 0 : curr + 1;
    ret += curr;
  }
  return ret;
};
const numSubarrayBoundedMax = (
  nums: number[],
  left: number,
  right: number
): number => {
  const ranges = nums.map(toRange(left, right));
  return count(2, ranges) - count(1, ranges);
};
