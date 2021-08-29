import { exch, Sort, test } from "./sortHelper.js";

function* genH(N: number) {
  let h = 1;
  while (h < Math.floor(N / 3)) h = 3 * h + 1;
  while (h >= 1) {
    yield h;
    h = Math.floor(h / 3);
  }
}

export const shellSort: Sort = (a, cp) => {
  const N = a.length;

  for (const h of genH(N)) {
    for (let i = h; i < N; i++) {
      for (
        let j = i;
        j >= h && cp(a[j], a[j - h]) < 0;
        j -= h
      ) {
        exch(a, j, j - h);
      }
    }
  }

  return a;
};

// test(shellSort);
// 这是插入排序的两层循环
// for (let i = 1; i < N; i++) {
//   for (
//     let j = i;
//     j > 0 && cp(arr[j], arr[j - 1]) < 0;
//     j--
//   ) {
//     exch(arr, j, j - 1);
//   }
// }
//可以看到希尔排序的内循环，
//就是把插入排序的1替换为了h
//（每次比较相邻两个替换成了每次比较相邻h个）
