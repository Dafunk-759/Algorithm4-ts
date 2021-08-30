import { exch, Sort, test, shuffle } from "./sortHelper.js";

export const quickSort: Sort = (a, cp) => {
  shuffle(a);
  sort(a, 0, a.length - 1, cp);
  return a;
};

function sort<T>(
  a: T[],
  lo: number,
  hi: number,
  cp: (a: T, b: T) => number
) {
  if (hi <= lo) return;
  let j = partition(a, lo, hi, cp);
  sort(a, lo, j - 1, cp);
  sort(a, j + 1, hi, cp);
  return a;
}

function partition<T>(
  a: T[],
  lo: number,
  hi: number,
  cp: (a: T, b: T) => number
): number {
  let i: number = lo,
    j: number = hi + 1;
  const v = a[lo];
  while (true) {
    while (cp(a[++i], v) < 0) if (i === hi) break;
    while (cp(v, a[--j]) < 0) if (j === lo) break;
    if (i >= j) break;
    exch(a, i, j);
  }
  exch(a, lo, j);
  return j;
}

// test(quickSort);
