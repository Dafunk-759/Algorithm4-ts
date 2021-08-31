import { Sort, test } from "./sortHelper.js";
import { sink } from "./MaxPQ.js";

export const heapSort: Sort = (arr, _cp) => {
  const cp: (a: number, b: number) => number = (a, b) =>
    _cp(arr[a], arr[b]);
  const exch: (a: number, b: number) => void = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  arr.unshift(arr[0]);
  let N = arr.length - 1;
  for (let k = Math.floor(N / 2); k >= 1; k--) {
    sink(k, cp, exch, N);
  }

  while (N > 1) {
    exch(1, N--);
    sink(1, cp, exch, N);
  }
  arr.shift();
  return arr;
};

// test(heapSort);
