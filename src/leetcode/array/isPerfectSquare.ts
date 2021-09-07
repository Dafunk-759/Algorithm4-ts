import * as util from "../../util/indexNode.js";

//leet-code 367
//1 <= num <= 2^31 - 1
function isPerfectSquare(num: number): boolean {
  function binarySearch(lo: number, hi: number): boolean {
    if (hi < lo) return false;

    const mid = (lo + hi) >> 1;
    if (mid ** 2 === num) return true;
    else if (mid ** 2 > num) {
      return binarySearch(lo, mid - 1);
    } else {
      return binarySearch(mid + 1, hi);
    }
  }

  return binarySearch(0, num);
}

util.test(isPerfectSquare, true, 16);
util.test(isPerfectSquare, false, 14);
