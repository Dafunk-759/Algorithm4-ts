//leet-code 977
import * as util from "../../util/indexNode.js";

function sortedSquares(nums: number[]): number[] {
  const aux: number[] = [];
  let mid = 0;
  while (true) {
    if (nums[mid] >= 0 || mid >= nums.length) {
      break;
    }
    mid += 1;
  }
  merge(0, mid, nums.length - 1);

  function merge(lo: number, mid: number, hi: number) {
    let i = mid - 1,
      j = mid,
      k = lo;
    while (true) {
      if (k >= nums.length) {
        break;
      }
      const left =
          i < lo ? Number.POSITIVE_INFINITY : nums[i] ** 2,
        right =
          j > hi ? Number.POSITIVE_INFINITY : nums[j] ** 2;
      if (left < right) {
        aux[k] = left;
        i -= 1;
      } else {
        aux[k] = right;
        j += 1;
      }
      k += 1;
    }
  }
  return aux;
}

util.test(
  sortedSquares,
  [0, 1, 9, 16, 100],
  [-4, -1, 0, 3, 10]
);
util.test(
  sortedSquares,
  [4, 9, 9, 49, 121],
  [-7, -3, 2, 3, 11]
);
