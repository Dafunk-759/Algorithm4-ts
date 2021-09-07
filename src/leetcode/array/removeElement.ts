//leet-code 27

import * as util from "../../util/indexNode.js";
//暴力
// function removeElement(
//   nums: number[],
//   val: number
// ): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       for (let j = i + 1; j < nums.length; j++) {
//         nums[j - 1] = nums[j];
//       }
//       nums.length -= 1;
//       i -= 1;
//     }
//   }

//   return nums.length;
// }

//快慢指针
function removeElement(
  nums: number[],
  val: number
): number {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow += 1;
    }
  }

  return (nums.length = slow);
}

util.test(removeElement, 2, [3, 2, 2, 3], 3);
util.test(removeElement, 5, [0, 1, 2, 2, 3, 0, 4, 2], 2);
