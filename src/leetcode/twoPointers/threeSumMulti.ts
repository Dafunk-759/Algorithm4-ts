const addRet = (ret: number, add: number) => {
  const MOD = 1_000_000_007;
  return (ret + add) % MOD;
};
const factorial = (n: number) => {
  let ret = 1;
  for (let i = 1; i <= n; i++) ret *= i;
  return ret;
};
const cnk = (n: number, k: number) => {
  if (n < k) return 0;
  let numerator = 1;
  for (let i = 0; i < k; i++) {
    numerator *= n - i;
  }
  return numerator / factorial(k);
};
const makeCount = (arr: number[]) => {
  const count = new Array(101).fill(0);
  for (const n of arr) {
    count[n] += 1;
  }
  return count;
};
const toAdd = (
  count: number[],
  from: number,
  l: number,
  r: number
) => {
  if (from === l && l === r) return cnk(count[from], 3);
  if (from !== l && l === r)
    return count[from] * cnk(count[l], 2);
  if (from === l && l !== r)
    return count[r] * cnk(count[from], 2);
  return count[from] * count[l] * count[r];
};
const twoSum = (
  count: number[],
  from: number,
  target: number
) => {
  let ret = 0;
  for (let l = from, r = count.length - 1; l <= r; ) {
    const sum = l + r;
    if (sum === target) {
      ret = addRet(ret, toAdd(count, from, l, r));
    }
    if (sum <= target) l++;
    if (sum >= target) r--;
  }
  return ret;
};
const threeSumMulti = (
  arr: number[],
  target: number
): number => {
  const count = makeCount(arr);
  let ret = 0;
  for (let i = 0; i < count.length; i++) {
    ret = addRet(ret, twoSum(count, i, target - i));
  }
  return ret;
};
