//leet-code  35

import * as util from "../../util/indexNode.js";

function searchInsert(
  nums: number[],
  target: number
): number {
  function binarySearch(lo: number, hi: number): number {
    if (hi < lo) return lo;
    const mid = (lo + hi) >> 1; //右移除以2

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return binarySearch(lo, mid - 1);
    } else {
      return binarySearch(mid + 1, hi);
    }
  }

  return binarySearch(0, nums.length - 1);
}

// util.test(searchInsert, 2, [1, 3, 5, 6], 5);
// util.test(searchInsert, 1, [1, 3, 5, 6], 2);
util.test(searchInsert, 4, [1, 3, 5, 6], 7);
