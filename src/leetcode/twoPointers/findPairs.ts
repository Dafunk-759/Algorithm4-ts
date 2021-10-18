const isKDiff = (k: number) => (a: number, b: number) => {
  const diff = Math.abs(a - b);
  if (diff === k) return 0;
  if (diff < k) return -1;
  return 1;
};
const inArrRange =
  (nums: number[]) => (p1: number, p2: number) =>
    p1 < nums.length && p2 < nums.length;
const nextP = (nums: number[]) => (p: number) => {
  while (nums[p + 1] === nums[p]) p += 1;
  p += 1;
  return p;
};
const findPairs = (nums: number[], k: number): number => {
  const kDiff = isKDiff(k);
  const inRange = inArrRange(nums);
  const next = nextP(nums);
  nums.sort((a, b) => a - b);
  let ret = 0;
  for (let p1 = 0, p2 = 1; inRange(p1, p2); ) {
    const diffRet = kDiff(nums[p1], nums[p2]);
    if (diffRet === 0) ret += 1;
    if (diffRet === 1) {
      p1 = next(p1);
      if (p1 === p2) p2 += 1;
    } else {
      p2 = next(p2);
    }
  }
  return ret;
};
