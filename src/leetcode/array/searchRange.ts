//leet-code 34
//nums 升序数组,可以重复
import * as util from "../../util/indexNode.js";

function searchRange(
  nums: number[],
  target: number
): number[] {
  function binarySearch(lo: number, hi: number): number {
    if (hi < lo) return -1;

    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return binarySearch(lo, mid - 1);
    } else {
      return binarySearch(mid + 1, hi);
    }
  }

  function range(pos: number): [number, number] {
    if (pos === -1) {
      return [-1, -1];
    } else {
      let lo = pos,
        hi = pos;
      while (true) {
        if (nums[lo] === target) lo -= 1;
        else break;
      }
      while (true) {
        if (nums[hi] === target) hi += 1;
        else break;
      }
      return [lo + 1, hi - 1];
    }
  }

  return range(binarySearch(0, nums.length - 1));
}

util.test(searchRange, [3, 4], [5, 7, 7, 8, 8, 10], 8);
util.test(searchRange, [-1, -1], [5, 7, 7, 8, 8, 10], 6);
util.test(searchRange, [-1, -1], [], 0);
