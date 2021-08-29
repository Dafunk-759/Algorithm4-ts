import { exch, Sort, test } from "./sortHelper.js";

export const selectSort: Sort = (arr, cp) => {
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    let min = i;

    for (let j = i + 1; j < N; j++) {
      if (cp(arr[j], arr[min]) < 0) min = j;
    }
    exch(arr, i, min);
  }

  return arr;
};

// test(selectSort);
