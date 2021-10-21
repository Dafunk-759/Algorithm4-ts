const findMax = (arr: number[], to: number) => {
  let max = Number.NEGATIVE_INFINITY;
  let ret = -1;
  for (let i = 0; i <= to; i++) {
    if (arr[i] > max) {
      max = arr[i];
      ret = i;
    }
  }
  return ret;
};
const reverse = (
  arr: number[],
  from: number,
  to: number
) => {
  for (let l = from, r = to; l < r; l++, r--) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
};
const pancakeSort = (arr: number[]): number[] => {
  const ret: number[] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    const maxIndex = findMax(arr, i);
    if (maxIndex === i) continue;
    ret.push(maxIndex + 1, i + 1);
    reverse(arr, 0, maxIndex);
    reverse(arr, 0, i);
  }
  return ret;
};
