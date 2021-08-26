import { binarySearch } from "./binarySearch.js";

//in array
function localMin(nums: number[]): number {
  const iter = binarySearch(
    nums,
    (mid, a) => a[mid - 1] > a[mid + 1],
    [0, nums.length - 1]
  );
  nums[-1] = +Infinity;
  nums[nums.length] = +Infinity;
  for (const i of iter) {
    if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      return i;
    }
  }
  return -1;
}

function min(a: number[], lo: number, hi: number): number {
  if (hi === lo) return hi;
  let mid = lo + Math.floor((hi - lo) / 2);
  if (a[mid] > a[mid + 1]) return min(a, mid + 1, hi);
  if (a[mid] < a[mid + 1]) return min(a, lo, mid);
  else return mid;
}

console.log(localMin([7, 2, 3, 5, 4, 3, 6]));
console.log(min([7, 2, 3, 5, 4, 3, 6], 0, 7));
