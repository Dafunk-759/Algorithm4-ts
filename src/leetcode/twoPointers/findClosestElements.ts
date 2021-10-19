const toDiff = (x: number) => (n: number, index: number) =>
  [n - x, index];
const byAbs = (item1: number[], item2: number[]) => {
  const abs1 = Math.abs(item1[0]);
  const abs2 = Math.abs(item2[0]);
  if (abs1 === abs2) {
    return item1[0] > 0 ? 1 : -1;
  }
  return abs1 - abs2;
};
const toBorder = (border: number[], item: number[]) => [
  Math.min(border[0], item[1]),
  Math.max(border[1], item[1]),
];
const findClosestElements = (
  arr: number[],
  k: number,
  x: number
): number[] => {
  const [l, r] = arr
    .map(toDiff(x))
    .sort(byAbs)
    .slice(0, k)
    .reduce(toBorder, [
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]);
  return arr.slice(l, r + 1);
};
