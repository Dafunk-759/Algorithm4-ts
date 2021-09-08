//leet-code 209
import * as util from "../../util/indexNode.js";

//滑动窗口
// function minSubArrayLen(
//   target: number,
//   nums: number[]
// ): number {
//   let sum = 0,
//     j = 0,
//     ret = Number.POSITIVE_INFINITY;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     while (sum >= target) {
//       ret = Math.min(ret, i - j + 1);
//       sum -= nums[j];
//       j += 1;
//     }
//   }
//   return ret === Number.POSITIVE_INFINITY ? 0 : ret;
// }

//二分前缀和
function minSubArrayLen(
  target: number,
  nums: number[]
): number {
  let ret = Number.POSITIVE_INFINITY;
  const sums = getSums();

  for (let start = 0; start < nums.length; start++) {
    const end = binarySearch(
      start,
      nums.length - 1,
      target,
      start
    );
    if (end === -1) continue;
    ret = Math.min(ret, end - start + 1);
  }

  return ret === Number.POSITIVE_INFINITY ? 0 : ret;

  function getSums() {
    const sums: number[] = [0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      sums[i + 1] = sum;
    }
    return sums;
  }

  function binarySearch(
    lo: number,
    hi: number,
    target: number,
    start: number
  ): number {
    if (hi < lo) return -1;

    const mid = (lo + hi) >> 1;
    const total = sums[mid + 1] - sums[start];

    if (total === target) {
      return mid;
    } else if (total < target) {
      return binarySearch(mid + 1, hi, target, start);
    } else {
      if (lo === hi) return mid;
      return binarySearch(lo, mid, target, start);
    }
  }
}

util.test(minSubArrayLen, 2, 7, [2, 3, 1, 2, 4, 3]);
util.test(minSubArrayLen, 1, 4, [1, 4, 4]);
util.test(minSubArrayLen, 0, 11, [1, 1, 1, 1, 1, 1, 1, 1]);
