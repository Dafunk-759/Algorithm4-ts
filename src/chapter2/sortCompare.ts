import { selectSort } from "./selectSort.js";
import { insertionSort } from "./insertionSort.js";
import { shellSort } from "./shellSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { heapSort } from "./heapSort.js";

sortCompare("heap", "quick", 1000, 1000);

type Alg =
  | "select"
  | "insertion"
  | "shell"
  | "merge"
  | "quick"
  | "heap"
  | "base";

function sortCompare(
  alg1: Alg,
  alg2: Alg,
  N: number,
  T: number
) {
  const t1 = timeRandomInput(alg1, N, T);
  const t2 = timeRandomInput(alg2, N, T);
  console.log(`${alg1}: ${t1}ms`);
  console.log(`${alg2}: ${t2}ms`);

  console.log(`For ${N} random Doubles ${alg1} is
  ${(t2 / t1).toFixed(2)} times faster than ${alg2}`);
}

function time<T>(
  alg: string,
  a: T[],
  cp: (a: T, b: T) => number
): number {
  let start = Date.now();

  if (alg === "select") selectSort(a, cp);
  if (alg === "insertion") insertionSort(a, cp);
  if (alg === "shell") shellSort(a, cp);
  if (alg === "merge") mergeSort(a, cp);
  if (alg === "quick") quickSort(a, cp);
  if (alg === "heap") heapSort(a, cp);
  if (alg === "base") a.sort(cp);

  return Date.now() - start;
}

function timeRandomInput(
  alg: string,
  N: number,
  T: number
) {
  let total = 0;
  const a: number[] = new Array(N);
  for (let t = 0; t < T; t++) {
    for (let i = 0; i < N; i++) {
      a[i] = Math.random();
    }
    total += time(alg, a, (a, b) => a - b);
  }
  return total;
}
