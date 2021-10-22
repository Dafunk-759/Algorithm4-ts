const toD = (a: number) => (b: number) => Math.abs(a - b);
const gt = (d: number) => (n: number) => n > d;
const toCount =
  (arr2: number[], d: number) =>
  (count: number, n: number) =>
    arr2.map(toD(n)).every(gt(d)) ? count + 1 : count;
const findTheDistanceValue = (
  arr1: number[],
  arr2: number[],
  d: number
): number => arr1.reduce(toCount(arr2, d), 0);
