import { exch, Sort, test } from "./sortHelper.js";

export const insertionSort: Sort = (arr, cp) => {
  let N = arr.length;

  for (let i = 1; i < N; i++) {
    for (
      let j = i;
      j > 0 && cp(arr[j], arr[j - 1]) < 0;
      j--
    ) {
      exch(arr, j, j - 1);
    }
  }

  return arr;
};

// test(insertionSort);
