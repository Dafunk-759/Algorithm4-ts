const isPeak = (arr: number[], i: number) => {
  const pre = arr[i - 1];
  const next = arr[i + 1];
  if (pre === undefined || next === undefined) return false;
  return arr[i] > pre && arr[i] > next;
};
const findFooter = (arr: number[], peak: number) => {
  let l = peak,
    r = peak;
  while (l - 1 >= 0 && arr[l - 1] < arr[l]) l -= 1;
  while (r + 1 < arr.length && arr[r + 1] < arr[r]) r += 1;
  return [l, r];
};
const longestMountain = (arr: number[]): number => {
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isPeak(arr, i)) continue;
    const [l, r] = findFooter(arr, i);
    ret = Math.max(ret, r - l + 1);
  }
  return ret;
};
