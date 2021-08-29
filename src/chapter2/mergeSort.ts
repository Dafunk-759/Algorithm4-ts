import { Sort, test } from "./sortHelper.js";

const aux: any[] = [];

export const mergeSort: Sort = (a, cp) => {
  sort(a, 0, a.length - 1, cp);
  // mergeBU(a, cp);
  return a;
};

const mergeBU: Sort = (a, cp) => {
  let N = a.length;
  for (let sz = 1; sz < N; sz += sz) {
    for (let lo = 0; lo < N - sz; lo += sz + sz) {
      merge(
        a,
        lo,
        lo + sz - 1,
        Math.min(lo + sz + sz - 1, N - 1),
        cp
      );
    }
  }
  return a;
};

function sort<T>(
  a: T[],
  lo: number,
  hi: number,
  cp: (a: T, b: T) => number
): void {
  if (hi <= lo) return;
  let mid = lo + Math.floor((hi - lo) / 2);
  sort(a, lo, mid, cp);
  sort(a, mid + 1, hi, cp);
  merge(a, lo, mid, hi, cp);
}

function merge<T>(
  a: T[],
  lo: number,
  mid: number,
  hi: number,
  cp: (a: T, b: T) => number
): void {
  let i = lo,
    j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    aux[k] = a[k];
  }
  for (let k = lo; k <= hi; k++) {
    if (i > mid) a[k] = aux[j++];
    else if (j > hi) a[k] = aux[i++];
    else if (cp(aux[j], aux[i]) < 0) a[k] = aux[j++];
    else a[k] = aux[i++];
  }
}

// test(mergeBU);
