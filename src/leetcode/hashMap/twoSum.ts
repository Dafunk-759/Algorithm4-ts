// leet code 1. 两数之和
import * as util from "../../util/indexNode.js";

//hash map
function makeMap(nums: number[]): Map<number, number[]> {
  return nums.reduce((map, curr, index) => {
    if (map.has(curr)) {
      (map.get(curr) as number[]).push(index);
    } else {
      map.set(curr, [index]);
    }
    return map;
  }, new Map<number, number[]>());
}

function forEach(
  numMap: Map<number, number[]>,
  nums: number[],
  i: number,
  target: number
): number[] {
  if (i >= nums.length) {
    return [];
  }
  if (numMap.has(target - nums[i])) {
    const arr = numMap.get(target - nums[i]) as number[];
    for (const index of arr) {
      if (index !== i) return [i, index];
    }
  }

  return forEach(numMap, nums, i + 1, target);
}

function twoSum(nums: number[], target: number): number[] {
  return forEach(makeMap(nums), nums, 0, target);
}

util.test(twoSum, [0, 1], [2, 7, 11, 15], 9);
util.test(twoSum, [1, 2], [3, 2, 4], 6);
util.test(twoSum, [0, 1], [3, 3], 6);
