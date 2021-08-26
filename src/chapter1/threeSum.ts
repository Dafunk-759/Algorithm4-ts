import * as util from "../util/indexNode.js";
import BinarySearch from "./binarySearch.js";

function twoSum(a: number[]): number {
  a.sort((a, b) => a - b);
  const N = a.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (BinarySearch.rank(-a[i], a) > i) {
      count++;
    }
  }
  return count;
}

function threeSum(a: number[]): number {
  a.sort((a, b) => a - b);
  const N = a.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (BinarySearch.rank(-a[i] - a[j], a) > j) {
        count++;
      }
    }
  }
  return count;
}

const input = util.read("1Mints.txt", "number") as number[];

console.time("test");
console.log(threeSum(input));
console.timeEnd("test");
